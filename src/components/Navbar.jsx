/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';


const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          Maths Magicians
        </div>
        <ul>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              <li>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
