import { useState, useEffect } from "react";
import '../components/Header.css';
import cartIcon from "../../public/cart.png";
import heartIcon from "../../public/heart.png";
import personIcon from "../../public/person.png";
import searchIcon from "../../public/search.png";
import { AuthPage } from "../components/AuthPage"
import '../styles/loginModal.css';

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('поиск:', searchQuery);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="header-nav">
        <div className="header-content">
          <div className="logo">
            <a href="/">ApsuaStore</a>
          </div>
          <form className="header-search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header-search-input"
            />
            <button type="submit">
              <img src={searchIcon} alt="search" className="header-search-icon" />
            </button>
          </form>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="headerAction">
            <div className="catalog">
              <a href="/catalog">Catalog</a>
            </div>
            <a href="/favorites" className="actionIcon">
              <span className="iconHeart">
                <img src={heartIcon} alt="icon" className="header-icon" />
              </span>
            </a>
            <a href="/cartPage" className="actionIcon">
              <span className="iconlogin">
                <img src={cartIcon} alt="icon" className="header-icon" />
              </span>
            </a>
            <div className="authBtn">
              <button onClick={() => setIsAuthOpen(true)} className="actionIcon-btn">
                <span className="iconlogin-btn">
                  <img src={personIcon} alt="icon" className="header-icon-btn" />
                </span>
              </button>
              <AuthPage isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobileMenu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobileMenuList">
          <li>
            <a href="#">🏠</a>
          </li>
          <li>
            <a href="#">🔍</a>
          </li>
          <li>
            <a href="#">❤️</a>
          </li>
          <li>
            <a href="#">👱</a>
          </li>
          <li>
            <a href="#">🛒</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
