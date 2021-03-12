// import "./index.scss";
import classes from "./index.module.scss"
import { Link } from "react-router-dom"
import logo from "../../img/yourmovie.jpeg"


function Header() {
    return (
        <div> 
            <div className={classes.header}>
                <h1 className={classes.header__title}>
                        <Link className={classes.home__link}  to="/Home">
                            <img src={logo} alt="fys"/>
                        </Link>
                    </h1>
                <nav>
                    <ul>
                        <li>
                            <Link className={classes.contact__link}  to="/about">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link className={classes.contact__link}  to="/contact">
                                Contact
                            </Link>
                            
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}



export default Header;

