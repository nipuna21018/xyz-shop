import React, { useState, useEffect } from 'react';
import loadingImg from '../../../../../assets/placeholders/loading.png';
import errorImg from '../../../../../assets/placeholders/error.jpg';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderSrc?: string;
    errorSrc?: string;
    actualSrc: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ placeholderSrc, errorSrc, actualSrc, alt, ...rest }) => {

    const [imageSrc, setImageSrc] = useState(placeholderSrc || loadingImg);

    useEffect(() => {
        const img = new Image();
        img.src = actualSrc;
        img.onload = () => {
            setImageSrc(actualSrc);
        };
        img.onerror = () => {
            setImageSrc(errorSrc || errorImg);
        };
    }, [actualSrc]);

    return (
        <img
            src={imageSrc} alt={alt} {...rest}
        />
    );
};

export default LazyImage