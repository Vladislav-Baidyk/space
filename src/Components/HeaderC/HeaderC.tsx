import { Link } from "react-router-dom"
import "./headerC.css"
import logo from "../../assets/shared/logo.svg";
import cross from "../../assets/shared/icon-close.svg";
import burger from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";

export const HeaderC = () => {
    const [menu,setMenu] = useState<boolean>(false);

    return(
        <>
           <nav className="navigation-header">
            <img className="logo-image" src={logo} alt="logo" />
            <ul className="links-header">
                <li className="li-links-header"><Link className="a-li-header" to={'/'}><b>00</b> HOME</Link></li>
                <li className="li-links-header"><Link className="a-li-header" to={'destination'}><b>01 </b>DESTINATION</Link></li>
                <li className="li-links-header"><Link className="a-li-header" to={'crew'}><b>02</b> CREW</Link></li>
                <li className="li-links-header"><Link className="a-li-header" to={'technology'}><b>03</b> TECHNOLOGY</Link></li>
            </ul>
           </nav>

           {/*mobile  version of it */}
                      <nav className="navigation-header-mobile">
                <img className="logo-image" src={logo} alt="logo" />
                        {menu ? (
                            <div className="block-header-mobile">
        <img onClick={() => setMenu(false)} className="cross" src={cross} alt="logo" />
            <ul className="links-header">
                <li className="li-links-header"><Link className="a-li-header" to={'/'}>00 HOME</Link></li>
                <li className="li-links-header"><Link className="a-li-header" to={'destination'}>01 DESTINATION</Link></li>
                <li className="li-links-header"><Link className="a-li-header" to={'crew'}>02 CREW</Link></li>
                <li className="li-links-header"><Link className="a-li-header" to={'technology'}>03 TECHNOLOGY</Link></li>
            </ul>
                            </div>
                        ) : 
                        (
                            <div>
                                <img onClick={() => setMenu(true)} className="burger-menu" src={burger} alt="burger" />
                            </div>
                        )}
           </nav>

        </>
    )
}