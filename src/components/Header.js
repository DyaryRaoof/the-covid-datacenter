import { BsChevronLeft, BsFillGearFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === '/detail' ? (
        <NavLink to="/" className="left-arrow-icon">
          <BsChevronLeft className="mx-1" />
        </NavLink>
      ) : (
        <NavLink to="/" className="left-arrow-icon hidden-icon">
          <BsChevronLeft className="mx-1" />
        </NavLink>
      )}
      <span>the covid dataset</span>
      <span>
        <FaMicrophone className="me-3" />
        <BsFillGearFill className="mx-1" />
      </span>
    </header>
  );
};

export default Header;
