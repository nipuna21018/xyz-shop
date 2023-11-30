import React from 'react';
import MainNav from "../../shared/components/main-nav/main-nav";
import Footer from "../../shared/components/footer/footer";

const HomePage = () => {
    return (
        <>
            <MainNav/>
            <div className="container home-page"></div>
            <Footer/>
        </>
    );
};

export default HomePage;