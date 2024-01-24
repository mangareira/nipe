import  { useState } from 'react';
import { Container } from './styles';
import { Items } from './items'; // Importando o componente Items
import { FaBars } from 'react-icons/fa6';

// eslint-disable-next-line react/prop-types
export const MenuPagesMobile = ({DropDown}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <Container>
        <FaBars onClick={toggleDropdown} size={35}/>
        {dropdownVisible && (
          <Items items={DropDown} closeDropdown={toggleDropdown} />
        )}
      </Container>
    </>
  );
};
