import React from 'react';
import logo from '../../assets/newlogo.8dcc6cc.png'
import './header.scss';

//Could change view manupulation in css.(T0 Do)
function toggleMenu() {
  let menu = document.querySelector('.menu');
  menu.classList.toggle("show-menu")
}

function Header() {
  return (
    <div className="container header-container">
      <div className="logo">
      <img src={logo}></img>
      </div>
      <div className="menu-handle">
        <a onClick={toggleMenu}><i className="fa fa-bars"></i></a>
      </div>
      <div className="container menu">
        <div className="menu--item">
          <a>SHOP</a>
        </div>
        <div className="menu--item">
          <a>OFFICIAL MERCH</a>
        </div>
        <div className="menu--item">
          <a>GAME OF THRONES</a>
        </div>
        <div className="menu--item">
          <a>EXCLUSIVE</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
