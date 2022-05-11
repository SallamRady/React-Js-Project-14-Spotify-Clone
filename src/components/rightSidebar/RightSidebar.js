import React from 'react';
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import profile from '../../resources/img/profile.jpg'
import './RightSidebar.scss';

const RightSidebar = () => {
    return (
        <div className="rightContainer">
            <div className="goPro">
                <i>
                    <FaCrown />
                    <p>
                        <span> Go</span>Pro
                    </p>
                </i>

                <i>
                    <FaBell />
                </i>

                <i>
                    <FaRegHeart />
                </i>
            </div>
            <div className="profile">
                <i>
                    <FaSun />
                </i>
                <i>
                    <FaCogs />
                </i>

                <div className="profileImage">
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;