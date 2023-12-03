import React, { useEffect, useRef } from 'react';

export interface WithInfiniteScrollProps {
    loadMore: (page: number) => void;
    hasMore: boolean;
    loading: boolean;
}

const withInfiniteScroll = <P extends WithInfiniteScrollProps>(
    WrappedComponent: React.ComponentType<P>
) => {
    const WithInfiniteScroll: React.FC<P> = (props) => {
        const { loadMore, hasMore, loading } = props as WithInfiniteScrollProps;
        const pageRef = useRef<number>(1);

        const handleScroll = () => {
            const scrollPosition =
                window.innerHeight + Math.ceil(document.documentElement.scrollTop);
            const documentHeight = Math.ceil(document.documentElement.offsetHeight);

            if (!loading && hasMore && scrollPosition >= documentHeight) {
                loadMore(pageRef.current);
                pageRef.current += 1;
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [handleScroll]);

        return <WrappedComponent {...props} />;
    };

    return WithInfiniteScroll;
};

export default withInfiniteScroll;
