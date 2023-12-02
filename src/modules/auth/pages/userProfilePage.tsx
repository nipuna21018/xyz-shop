import React from 'react';
import { logout } from '../store/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface UserProfilePageProps {
  logout: () => void;
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({logout}) => {

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
            <img
              src="https://i.pravatar.cc/300"
              alt="User Avatar"
              className="card-img-top img-fluid"
              loading="lazy"
            />
            <div className="card-body">

            </div>
          </div>
        </div>
        <div className="col-md-8">
          {/* Additional content for the user profile page */}
          <h2>User Profile</h2>
          <p>
            This is the user's profile page. You can add more sections and information as needed.
          </p>

          <h5 className="card-title">User Name</h5>
          <p className="card-text">Email: user@example.com</p>
          <p className="card-text">Location: City, Country</p>
          <p className="card-text">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/* Logout button */}
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// Add mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(UserProfilePage);