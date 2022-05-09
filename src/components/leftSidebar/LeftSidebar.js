import React from 'react';
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { MenuList1 } from '../../data/Menu1'
import Menu from '../menu/Menu';
import './LeftSidebar.scss';

const LeftSidebar = () => {
    return (
        <div className="leftSidebar">
        <div className="logoContainer">
          <div className="logo">
            <i>
              <FaSpotify />
            </i>
  
            <h2>Spotify</h2>
          </div>
  
          <i>
            <FaEllipsisH />
          </i>
        </div>
  
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <i>
            <BiSearchAlt />
          </i>
        </div>
  
        <Menu title={"Menu"} listObject={MenuList1} />
      </div>
    );
};

export default LeftSidebar;