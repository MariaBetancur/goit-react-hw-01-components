import PropTypes from 'prop-types';
import React from 'react';
import './Profile.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
        />
        <p>username: {username}</p>
        <p>tag: {tag}</p>
        <p>location: {location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  imgUrl: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

const profileProps = {
  username: 'JohnDoe',
  tag: 'johndoe123',
  location: 'New York',
  avatar: 'https://example.com/avatar.jpg',
  followers: 1000,
  views: 5000,
  likes: 200,
  // Ensure stats, label, and quantity are provided as needed
};

ReactDOM.render(<Profile {...profileProps} />, document.getElementById('root'));
