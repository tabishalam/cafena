import { NavLink } from 'react-router-dom';

import classes from "./Navbar.module.scss";
import PrimaryButton from '../Button/PrimaryButton';

function Navbar() {
  return (
        <nav className={classes.nav}>
            <div className={classes.logo__container}>
              <img className={classes.logo} src="/assets/logo.png" alt="Logo" />
            </div>
            
            <ul className={classes.nav__links}>
              <li className={classes.nav__link}>
                <NavLink className={classes.link} to="/">Home</NavLink>
              </li>
              <li className={classes.nav__link}>
                <NavLink className={classes.link} to="/">About</NavLink>
              </li>
              <li className={classes.nav__link}>
                <NavLink className={classes.link} to="/">Menu</NavLink>
              </li>
              <li className={classes.nav__link}>
                <NavLink className={classes.link} to="/">Reservation</NavLink>
              </li>
              <li className={classes.nav__link}>
                <NavLink className={classes.link} to="/">Shop</NavLink>
              </li>
              <li className={classes.nav__link}>
                <NavLink className={classes.link} to="/">Contact</NavLink>
              </li>
              <li>
                <PrimaryButton text="Book Now" />
              </li>
            </ul>
        </nav>
  )
}

export default Navbar;