import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../store/auth/authSlice';
import PropTypes from 'prop-types';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-gray-500 lg:p-4">
      <nav className="flex  justify-between items-center px-2 py-4 lg:p-3 ">
        <Link to="/" className="text-white text-2xl font-bold">Event Platform</Link>
        <div className='lg:mr-5 '>
          {isAuthenticated ? (
            <>
              <Link to="/create-event" className="text-white lg:border lg:border-white lg:px-6 py-3 rounded-full hover:bg-white hover:text-black mr-4">Create Event</Link>
              <button onClick={handleLogout} className="text-white lg:border lg:border-white lg:px-6 py-3 rounded-full hover:bg-white hover:text-black">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4 md:border lg:border border-white md:px-6 lg:px-6 py-3 rounded-full hover:bg-white hover:text-black">Login</Link>
              <Link to="/signup" className="text-white md:border lg:border border-white md:px-6 lg:px-6 py-3 rounded-full hover:bg-white hover:text-black">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Header;

