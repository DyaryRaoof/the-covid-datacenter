import { BsChevronLeft, BsFillGearFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <NavLink to="/" className="left-arrow-icon">
      <BsChevronLeft className="mx-1" />
    </NavLink>
    <span>most views</span>
    <span>
      <FaMicrophone className="me-3" />
      <BsFillGearFill className="mx-1" />
    </span>
  </header>
);

export default Header;
