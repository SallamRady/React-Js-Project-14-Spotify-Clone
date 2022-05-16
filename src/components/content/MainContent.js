import React from 'react';
import Banner from '../Banner/Banner';
import CategoriesMenu from '../categoriesMenu/CategoriesMenu';
import SongsList from '../Songs/SongsList';
import './MainContent.scss';

const MainContent = () => {
    return (
        <div className='mainContainer'>
            <Banner/>
            <CategoriesMenu/>
            <SongsList/>
        </div>
    );
};

export default MainContent;