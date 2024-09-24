import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './WishList.css';
import { WishlistContext } from '../WishlistContext/WishlistContext';
const Wishlist = () => {
  const location = useLocation();
  const { title } = location.state || {}; 
  const { wishlist } = useContext(WishlistContext);
 //const whishlist = useContext(whishListContext);
  return (
    <div>
      <h1>My Wishlist</h1>
      <div >
      {/* {wishlist.map((movie, index) => (
        <div className='wishlist-card' key={index}>{movie.title}</div>
      ))} */}
      </div>
      <div className="wishlist">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((movie, index) => (
            <Link to={`/movie/${movie.id}`}>
            <div className='wishlist-card' key={index}>
              {/* <p>{movie.title}</p> */}
            <img src={movie.image} alt="movieImage" />
            </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;

