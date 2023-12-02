import React, { useEffect } from 'react';
import withMainLayout from "../../shared/components/layouts/main-layout";
import { connect } from 'react-redux';
import { getHomePageRecRequest } from '../../recomendation/store/actions';
import { RootState } from '../../../store/reducers';
import { Dispatch } from 'redux';

interface HomeProps {
    // any props specific to Home here
    recommendations: any[]; // Adjust the type based on your actual data structure
    loading: boolean;
    getHomePageRec: (page: number) => void;
}

const HomePage: React.FC<HomeProps> = ({ getHomePageRec, recommendations, loading }) => {
    useEffect(() => {
        // Dispatch the action to get recommendations when the component mounts
        getHomePageRec(1);
    }, [getHomePageRec]);

    return (
        <div className="container home-page">Hello hoc home</div>
    );
};

const mapStateToProps = (state: RootState) => ({
    recommendations: state.recommendations,
    loading: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getHomePageRec: (page: number) => dispatch(getHomePageRecRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withMainLayout(HomePage));
