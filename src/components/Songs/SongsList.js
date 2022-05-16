import React,{useState,useEffect} from 'react';
import Songs from '../../data/Songs';
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import './SongsList.scss';

const SongsList = () => {
    const [activeSong, setactiveSong] = useState(Songs[0]);
    const Song  = Songs.map((song, index) => (
        <div 
           className="songs"
           onClick={()=>setactiveSong(song)}
           key={song?.id}>
            <div className="count">
                <p>{`#${index + 1}`}</p>
            </div>
            <div className="song">
                <div className="imgBox">
                    <img src={song?.imgSrc} alt={song.songName} />
                </div>
                <div className="section">
                    <p className="songName">
                        {song?.songName}{" "}
                        <span className="songSpan">{song?.artist}</span>
                    </p>
                    <div className="hits">
                        <p className="hit">
                            <i>
                                <FaHeadphones />
                            </i>
                            95,490,102
                        </p>
                        <p className="duration">
                            <i>
                                <FaRegClock />
                            </i>
                            03:04
                        </p>
                        <div
                        className="favourite">
                            {song?.favourite ? (
                                <i>
                                <FaHeart />
                                </i>
                            ) : (
                                <i>
                                <FaRegHeart />
                                </i>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )); 

    return (
        <div className="SongsList">
            <h2 className="title">
                The list <span>{Songs.length} songs</span>
            </h2>
            <div className="songsContainer">
                {Song}
            </div>
            <div className='SongPlayer'>
                    <div className='imgBox'>
                        <img src={activeSong.imgSrc} alt="active song"/>
                    </div>
                    <p>{activeSong.songName}</p>
                    {/* <audio controls>
                        <source src={activeSong.song} type="audio/ogg"/>
                        <source src={activeSong.song} type="audio/mpeg"/>
                        Your browser does not support the audio tag.
                    </audio> */}
                    <audio controls preload="none">
                        <source src={`${activeSong.song}.wav`} type="audio/ogg"></source>
                        <source src={`${activeSong.song}.wav`} type="audio/mpeg"></source>
                        <source src={activeSong.song} type="audio/ogg"></source>
                        <source src={activeSong.song} type="audio/mpeg"></source>
                    </audio>
            </div>
    </div>
    );
};

export default SongsList;