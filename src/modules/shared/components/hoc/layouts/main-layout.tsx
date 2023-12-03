import React from 'react';

import Footer from "../../footer/footer";
import MainNav from "../../main-nav/main-nav";

const withMainLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return function WithMainLayout(props: P) {
        return (
            <div>
                <MainNav />
                <div className='min-vh-100'>
                    {/* Content area */}
                    <WrappedComponent {...props} />
                </div>
                <Footer />
            </div>
        );
    };
};

export default withMainLayout;