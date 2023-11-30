import React from 'react';
import withMainLayout from "../../shared/components/layouts/main-layout";

interface HomeProps {
    // any props specific to Home here
}

const HomePage: React.FC<HomeProps> = () => {
    return (

        <div className="container home-page">Hello hoc home</div>

    );
};

export default withMainLayout(HomePage);