/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const LinksItens = ({ linksArray, closeMenu }) => {
    return(
        <>
            <ul >
                {linksArray.map((link, index) => (
                    <li key={index}  >
                        <div > 
                            <Link to={link.to} onClick={closeMenu}>
                                {link.label}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default LinksItens;
