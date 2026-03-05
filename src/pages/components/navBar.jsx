import {useState} from "react";
import '../../CSS/navBar.css'

function navBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='navContainer'>
                <div className='title'><p className='name'>Ballet Folklorico de Puebla York</p></div>
                <div className="menu_button" onClick={toggleMenu}>
                    <button className="menu" >
                        {isOpen ? "Close" : "Menu"}
                    </button>
                </div>
                
                <div className={`linkContainer ${isOpen ? "active" : ""}`}>
                    <div className="links"><p>Gallery</p></div>
                    <div className="links"><p>About Us</p></div>
                    <div className="links" id='lastLink'><p>Contact</p></div>
                </div>
                
            </div>
        </>
    )
}
export default navBar;