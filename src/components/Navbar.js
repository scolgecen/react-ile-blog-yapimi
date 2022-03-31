import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';

 const Navbar = () => {
   const {bgColor,changeColor} =useTheme();
  return (
    <div className='navbar' style={{backgroundColor:bgColor}}>
    <nav onClick={()=>changeColor('#c44569')}>
        <Link to="/" className="brand">Anasayfa</Link>
        <Searchbar />
        <Link to="/create" className="brand">Yeni Yazı </Link>
    </nav>
    </div>
  )
}
export default Navbar;