import logo from "../../assets/logo.png";
import { links } from "../../Data";
import { Link } from 'react-scroll';
import { FaStream } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import "./header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeader = () => {
    if( window.scrollY >= 80 ){
      setScrollHeader(true);
    }else{
      setScrollHeader(false);
    }
  }

  const scrollTop = () => {
    animateScroll.scrollToTop();
  }

  useEffect(()=>{
    window.addEventListener( 'scroll', changeHeader )
  }, []);

  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav__logo">
          <img src={logo} alt="Garden-Heroes logo" className="nav__logo-img" />
        </Link>
        <div className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
          <ul className="nav__list">
            { links.map(({name, path}, index) =>{
              return (
                <li className="nav__item" key={ index }>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={100}
                    to={path} 
                    className="nav__link"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    { name }
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <FaStream/>
        </div>
      </nav>
    </header>
  )
}

export default Header