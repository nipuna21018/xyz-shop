// HomePage.tsx
import React, { useEffect, useRef } from 'react';
import withMainLayout from '../../shared/components/layouts/main-layout';
import { connect } from 'react-redux';
import { getHomePageRecRequest } from '../../recomendation/store/actions';
import { RootState } from '../../../store/reducers';
import { Dispatch } from 'redux';
import { Product } from '../../recomendation/interfaces/product.interface';
import { getHomepageRecommendations } from '../../recomendation/store/selectors';

interface HomeProps {
    recommendations: Product[];
    loading: boolean;
    getHomePageRec: (page: number) => void;
    hasMore: boolean;
}

const HomePage: React.FC<HomeProps> = ({ getHomePageRec, recommendations, loading, hasMore }) => {
    const pageRef = useRef<number>(1);

    useEffect(() => {
        // Fetch initial recommendations when the component mounts
        getHomePageRec(1);
    }, [getHomePageRec]);

    const handleScroll = () => {

        // Check if the user has scrolled to the bottom
        const scrollPosition = window.innerHeight + Math.ceil(document.documentElement.scrollTop);
        const documentHeight = Math.ceil(document.documentElement.offsetHeight);

        if (!loading && hasMore && scrollPosition === documentHeight) {
            // Fetch more recommendations when the user scrolls to the bottom
            getHomePageRec(pageRef.current);
            pageRef.current ++;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="container home-page">

            <h1 className='mt-3'>Recommended Products</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {recommendations.map((product) => (
                    <div key={product.product_code} className="col">
                        <div className="card h-100">
                            <img
                                src={product.images[0]?.url} // Assuming images is an array, adjust accordingly
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.shortDescription}</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between">
                                    <p className="card-text">${product.price}</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <p>Loading...</p>}

        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    recommendations: getHomepageRecommendations(state),
    loading: state.recommendations.loading,
    hasMore: state.recommendations.hasMore,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getHomePageRec: (page: number) => dispatch(getHomePageRecRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withMainLayout(HomePage));
