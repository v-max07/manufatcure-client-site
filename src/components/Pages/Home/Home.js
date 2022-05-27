import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import Business from '../../../Shared/Business/Business';
import Services from '../../../Shared/services/Services';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Summary></Summary>
            <Business></Business>
        </div>
    );
};

export default Home;