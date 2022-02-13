import React from 'react';
import "./header.css";
import icon from "./fitclub.png";
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <div className='header--container'>
            <img src = {icon} alt= "logo"></img>
            <SearchBar></SearchBar>
            <div className='container'><span>Username</span></div>
        </div>
    )
}