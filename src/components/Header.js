import { BsChevronLeft, BsFillGearFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';

const Header = () => (
  <header>
    <BsChevronLeft />
    <span>most views</span>
    <span>
      <FaMicrophone />
      <BsFillGearFill />
    </span>
  </header>
);

export default Header;
