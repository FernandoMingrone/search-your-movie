import {Link} from "react-router-dom";
// import "./index.scss";
import classes from "./index.module.scss";

function Footer() {
    return (
        <footer className={classes.footer}>
            <h4>Derechos Reservados 2021</h4>
            <p>Limited Company registered in England and Wales, number 2466940. Registered Charity in England and Wales, number 703015. Registered Charity in Scotland, number SC045788.</p>
            <Link className="link__contact" to="/contact">Contact</Link>
        </footer>

    );
}

export default Footer;