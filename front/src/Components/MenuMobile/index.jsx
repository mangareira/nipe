import { Link } from 'react-router-dom'
import { Container } from './styles'
import { IoClose } from 'react-icons/io5'
import { FaCaretDown, FaClipboard, FaFileLines, FaHouse, FaLink, FaPeopleGroup,  FaSquarePhone } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import LinksItens from './ItensLinks'
import { dropdownItemsPesquisa, dropdownItemsProgramas } from '../MenuItems/MenuItemsMobile'






// eslint-disable-next-line react/prop-types, no-unused-vars
function MenuMobile ({ menuIsVisible, setMenuIsVisible }) {
    const [dropdownVisible, setDropdownVisible] = useState({
        programas: false,
        pesquisa: false,
    });

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible  ? 'hidden' : 'auto';
      }, [menuIsVisible]);

    const toggleDropdown = (dropdownKey) => {
    setDropdownVisible((prev) => ({
        ...prev,
        [dropdownKey]: !prev[dropdownKey],
    }));
    };
    
    const closeMenu = () => {
        setMenuIsVisible(false);
        setDropdownVisible({
            programas: false,
            pesquisa: false,
        });
    };
    return(
        <Container $isVisible={menuIsVisible} >
            <IoClose size={45}   onClick={closeMenu}/>
            <nav>
                <Link to='/' >
                    <FaHouse />Home
                </Link>
                {Object.keys(dropdownItemsProgramas).map((dropdownKey) => (
                    <div key={dropdownKey} onClick={() => toggleDropdown(dropdownKey)} className='programas'>
                        <div><FaClipboard />{dropdownKey.charAt(0).toUpperCase() + dropdownKey.slice(1)} <FaCaretDown /></div>
                        {dropdownVisible[dropdownKey] && <LinksItens linksArray={dropdownItemsProgramas[dropdownKey]} closeMenu={closeMenu} />}
                    </div>
                ))}
                {Object.keys(dropdownItemsPesquisa).map((dropdownKey) => (
                    <div key={dropdownKey} onClick={() => toggleDropdown(dropdownKey)} className='pesquisa'>
                        <div><FaClipboard />{dropdownKey.charAt(0).toUpperCase() + dropdownKey.slice(1)} <FaCaretDown /></div>
                        {dropdownVisible[dropdownKey] && <LinksItens linksArray={dropdownItemsPesquisa[dropdownKey]} closeMenu={closeMenu} />}
                    </div>
                ))}
                <Link to='/editais'>
                    <FaFileLines />Editais
                </Link>
                <Link to='/grupodepesquisa'>
                    <FaPeopleGroup />Grupo de Pesquisa
                </Link>
                <Link to='/links'>
                    <FaLink />Links
                </Link>
                <Link to='https://api.whatsapp.com/send/?phone=559982103503&text&type=phone_number&app_absent=0'>
                    <FaSquarePhone/>  contato
                </Link>
            </nav>
        </Container>
    )
}

export default MenuMobile