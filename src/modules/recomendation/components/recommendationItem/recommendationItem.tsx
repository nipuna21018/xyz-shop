import React from 'react';
import { Product } from '../../interfaces/product.interface';

interface RecommendationItemProps {
    product: Product;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({ product }) => {
    return (
        <div key={product.product_code} className="col">
            <div className="card h-100">
                <img
                    src={product.images[0]?.url}
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
    );
};

export default RecommendationItem;
