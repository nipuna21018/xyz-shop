import React from 'react';
import withMainLayout from '../../shared/components/hoc/layouts/main-layout';
import RecommendationContainer from '../../recomendation/components/recommendationContainer/recommendationContainer';

const HomePage: React.FC = () => {
  return (
      <div className="container home-page">
        <RecommendationContainer />
      </div>
  );
};

export default withMainLayout(HomePage);