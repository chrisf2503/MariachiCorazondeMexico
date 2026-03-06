import {useState} from "react";
import '../../CSS/navBar.css'
import Logo from '../../assets/mariachi_corazon_logo2.png'
function navBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='navContainer'>
                <div className='title'>
                    <img src={Logo} className="navLogo" alt="Mariachi Corazon de Mexico logo" />
                </div>
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
