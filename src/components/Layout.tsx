import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Start here', path: '/how-to-use' },
    { label: 'Stories', path: '/stories' },
    { label: 'Evidence', path: '/tools' },
    { label: 'Templates', path: '/email-templates' },
    { label: 'Precedents', path: '/precedents' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-200"
        style={{
          backgroundColor: 'var(--surface)',
          borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="w-full px-6 lg:px-10 flex items-center justify-between h-14">
          <Link
            to="/"
            className="font-semibold text-sm tracking-tight"
            style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}
          >
            Workers Toolkit
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link"
                style={isActive(link.path) ? { color: 'var(--accent)', fontWeight: 600 } : {}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/submit"
              className="ml-3 btn-primary text-xs px-4 py-2"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              Submit story
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--text)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99] md:hidden pt-14"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <div
            className="border-b px-6 py-4 space-y-1"
            style={{ borderColor: 'var(--border)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 rounded-lg font-medium text-base transition-colors"
                style={{
                  color: isActive(link.path) ? 'var(--accent)' : 'var(--text)',
                  backgroundColor: isActive(link.path) ? 'var(--accent-light)' : 'transparent',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/submit"
              className="block px-3 py-3 rounded-lg font-medium text-base"
              style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}
            >
              Submit story
            </Link>
          </div>
        </div>
      )}

      <main className="relative pt-14">
        <Outlet />
      </main>

      <footer style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>
        <div className="px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <p className="font-semibold text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Workers Toolkit
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                Not legal advice. Independent and worker-led.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                { label: 'Glossary', path: '/glossary' },
                { label: 'Patterns', path: '/patterns' },
                { label: 'Collective action', path: '/collective-action' },
                { label: 'Submit story', path: '/submit' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm transition-colors"
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontFamily: 'Inter, sans-serif',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', maxWidth: '560px' }}>
              This toolkit is for informational purposes only and does not constitute legal advice. No solicitor-client relationship is created by using this site. We are independent of WorkSafeBC, employers, unions, and government.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
