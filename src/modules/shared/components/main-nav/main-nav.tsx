import React from 'react';
import './main-nav.css';
import logoImage from '../../../../assets/logos/orelbuyNew.png';
import userIcon from '../../../../assets/icons/user.svg';
import cartIcon from '../../../../assets/icons/cart.svg';
import poweredByLogo from '../../../../assets/logos/poweredby-orel-img.webp';
import { connect } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { getUserProfile } from '../../../auth/store/selectors';
import { User } from '../../../auth/interfaces/user.interface';

interface MainNavProps {
    user: User;
}

const MainNav: React.FC<MainNavProps> = ({ user }) => {

    return (
        <div className="main-nav shadow">
            {/* Top toolbar secton */}
            <div className="nav-top-toolbar bg-primary">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">Welcome to OrelBuy</div>
                        <div className='d-flex'>
                            <div className="dropdown text-white">
                                <button className="btn btn dropdown-toggle text-white" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Track My Order
                                </button>
                            </div>
                            {!user &&
                                <>
                                    <a className="btn btn-link text-white" href='/login'>
                                        Login
                                    </a>
                                    <button className="btn btn-link text-white" type="button">
                                        Sign Up
                                    </button>
                                </>
                            }
                            {user && <a className="btn btn-link text-white" href='/profile'>{`Hi ${user.name}!`}</a>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Search bar section */}
            <div>
                <div className="container p-3">

                    <div className="d-flex justify-content-between">
                        <a href="/">
                            <img className='logo' src={logoImage} />
                        </a>
                        <div className='search-box'>
                            <input className="form-control me-2 input-lg rounded-5 p-3" type="search" placeholder="Type and hit enter to select" aria-label="Search" />
                        </div>
                        <div className='btn-section'>
                            {user && <a href='/profile'><img className="profile-img bg-light" src={user ? user.avatar : userIcon} /></a>}
                            {!user &&
                                <button >
                                    <img src={userIcon} />
                                </button>
                            }
                            <button >
                                <img src={cartIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <button className="btn btn-primary me-2 bt-category" type="button">All Categories</button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Flash Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Special offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Merchants</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Brands</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sell On OREL Buy</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Powered By <img src={poweredByLogo} className="img-poweredby" />
                        </span>
                    </div>
                </div>
            </nav>

        </div >

    );
};

//Add mapStateToProps
const mapStateToProps = (state: RootState) => ({
    user: getUserProfile(state)
});

export default connect(mapStateToProps, null)(MainNav);