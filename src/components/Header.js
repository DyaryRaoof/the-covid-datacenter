import { BsChevronLeft, BsFillGearFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header>
    <BsChevronLeft className="mx-1" />
    <span>most views</span>
    <span>
      <FaMicrophone className="me-3" />
      <BsFillGearFill className="mx-1" />
    </span>
  </header>
);

export default Header;
