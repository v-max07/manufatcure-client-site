import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import Business from '../../../Shared/Business/Business';
import Services from '../../../Shared/services/Services';
import Bike from '../Bike/Bike';
import Categories from '../Categories/Categories';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Bike></Bike>
            <Summary></Summary>
            <Categories></Categories>
            <Business></Business>
        </div>
    );
};

export default Home;