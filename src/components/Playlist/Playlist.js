import React from 'react';
import {FaPlus} from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import PlayListData from "../../data/Playlist1";
import './Playlist.scss';

const Playlist = () => {
    const playlistItem = PlayListData.map(
        item=>{
            return (
                <div className="playLists" key={item.id}>
                    <i className="list">
                        <BsMusicNoteList />
                    </i>
                    <p>{item.name}</p>
                    <i className="trash">
                        <BsTrash />
                    </i>
                </div>
            )
        }
    )
    return (
        <div className='playlist'>
            <div className='title'>
                <p>Playlists</p>
                <i>
                    <FaPlus/>
                </i>
            </div>
            <div className="playListScroll">
                {playlistItem}
            </div>
        </div>
    );
};

export default Playlist;
