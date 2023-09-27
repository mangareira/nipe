import { useState } from 'react';
import { MenuItems } from '../MenuItems';
import styles from './Dropdown.module.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? `${styles.dropdown_menu} ${styles.clicked}` : `${styles.dropdown_menu}`}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.dropdown_link}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;