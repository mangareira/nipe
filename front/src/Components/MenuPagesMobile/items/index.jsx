/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const Items = ({ items, closeDropdown }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.to} onClick={closeDropdown}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}