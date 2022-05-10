import React from 'react';
import Track from "../../resources/img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import './Tracker.scss';

const Tracker = () => {
    return (
        <div className="trackList">
            <div className="top">
                <img src={Track} width='50px' height='50px'/>
                <p>
                    Song Name <span>Artist</span>
                </p>
            </div>

            <div className="bottom">
                <i>
                    <BsFillVolumeUpFill />
                </i>
                <input type="range" />
                <i>
                    <BsMusicNoteList />
                </i>
                <i>
                    <FaDesktop />
                </i>
            </div>
        </div>
    );
};

export default Tracker;
