import React, { useEffect } from 'react';
import withInfiniteScroll, { WithInfiniteScrollProps } from '../../../shared/components/hoc/infinite-scroll/withInfiniteScroll';
import { connect } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { Dispatch } from 'redux';
import { Product } from '../../../recomendation/interfaces/product.interface';
import { getHomepageRecommendations } from '../../../recomendation/store/selectors';
import { getHomePageRecRequest } from '../../../recomendation/store/actions';
import RecommendationItem from '../recommendationItem/recommendationItem';
import RecommendationSkeleton from '../recommendationItem/recommendationItemSkeleton';

interface RecommendationContainerProps extends WithInfiniteScrollProps {
    recommendations: Product[];
    loading: boolean;
    hasMore: boolean;
    loadMore: (page: number) => void;
}

const RecommendationContainer: React.FC<RecommendationContainerProps> = ({
    loadMore,
    recommendations,
    loading,
}) => {
    useEffect(() => {
        // Fetch initial recommendations when the component mounts
        loadMore(1);
    }, [loadMore]);

    return (
        <div>
            <h1 className='my-3'>Recommended Products</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {recommendations.map((product) => (
                    <RecommendationItem key={product.product_code} product={product} />
                ))}

                {loading &&
                    // Render multiple skeleton components while loading
                    Array.from({ length: 5 }).map((_, index) => <RecommendationSkeleton key={index} />)}
            </div>
           
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    recommendations: getHomepageRecommendations(state),
    loading: state.recommendations.loading,
    hasMore: state.recommendations.hasMore,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadMore: (page: number) => dispatch(getHomePageRecRequest(page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withInfiniteScroll(RecommendationContainer));
