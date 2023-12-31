import React from 'react';
import { logout } from '../store/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getUserProfile } from '../store/selectors';
import { RootState } from '../../../store/reducers';
import { User } from '../interfaces/user.interface';
import withMainLayout from '../../shared/components/hoc/layouts/main-layout';
import LazyImage from '../../shared/components/hoc/lazy-image/lazyImage';

interface UserProfilePageProps {
  logout: () => void;
  user: User
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ logout, user }) => {

  const handleLogout = () => {
    // Call the logout function from props
    logout();
  };

  return (
    <div className="container home-page mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">

            {/* Lazy-loaded user image */}
            <LazyImage
              actualSrc='https://i.pravatar.cc/3000'
              alt="User Avatar"
              className="card-img-top img-fluid"
            />
          </div>
        </div>
        <div className="col-md-8">
          {/* Additional content for the user profile page */}
          <h2>User Profile</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className="card-text">Name: {user?.name}</p>
          <p className="card-text">Email: {user?.email}</p>
          <p className="card-text">Location: City, Country</p>
          <p className="card-text">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/* Logout button */}
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

//Add mapStateToProps
const mapStateToProps = (state: RootState) => ({
  user: getUserProfile(state)
});

// Add mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withMainLayout(UserProfilePage));