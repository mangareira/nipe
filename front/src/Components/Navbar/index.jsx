import  { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from'./Navbar.module.css';
import Dropdown from '../Dropdown';
import DropdownPes from '../DropdownPes';
import nipelogo from '../../assets/nipelogo.png'
import {FaCaretDown, FaHouse, FaClipboard, FaSistrix, FaFileLines, FaPeopleGroup, FaLink, FaSquarePhone, FaBars} from 'react-icons/fa6'

function Navbar() {
  const [dropdown, setDropdown] = useState(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const [dropdownPes, setDropdownPes] = useState(false);


  const onMouseEnterPes = () => {
    if (window.innerWidth < 960) {
      setDropdownPes(false);
    } else {
      setDropdownPes(true);
    }
  };

  const onMouseLeavePes = () => {
    if (window.innerWidth < 960) {
      setDropdownPes(false);
    } else {
      setDropdownPes(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.space_logo}>
          <Link to='/' className={styles.logo}>
            <img src={nipelogo} alt="nipelogo" className={styles.logo_nipe}/>
          </Link>
        </div>
        <FaBars className={styles.nav_bars}/>
        <ul className={styles.nav_menu}>
          <li className={styles.nav_item}>
            <Link to='/' className={styles.nav_links} >
              <FaHouse className={styles.icon_nav}/>Home
            </Link>
          </li>
          <li
            className={styles.nav_item}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className={styles.nav_links}
              
            >
              <FaClipboard className={styles.icon_nav}/>Programas <FaCaretDown/>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className={styles.nav_item}
          onMouseEnter={onMouseEnterPes}
          onMouseLeave={onMouseLeavePes}>
            <Link
              className={styles.nav_links}
            >
              <FaSistrix className={styles.icon_nav}/>Pesquisa <FaCaretDown/>
            </Link>
            {dropdownPes && <DropdownPes />}
          </li>
          <li className={styles.nav_item}>
            <Link
              to='/editais'
              className={styles.nav_links}
              
            >
              <FaFileLines className={styles.icon_nav}/>Editais
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to='/grupodepesquisa'
              className={styles.nav_links}
              
            >
              <FaPeopleGroup className={styles.icon_nav}/>Grupo de Pesquisa
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to='/links'
              className={styles.nav_links}
              
            >
              <FaLink className={styles.icon_nav}/>Links
            </Link>
          </li>
          <li className={styles.nav_item}>
            
            <Link
              to='/contato'
              className={styles.nav_btn}
              
            >
            <FaSquarePhone className={styles.icon_btn}/>  contato
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
