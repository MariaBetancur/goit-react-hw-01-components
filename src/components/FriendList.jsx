import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className="status">
            {isOnline ? 'status online' : 'status offline'}
          </span>
          <img
            className="avatar"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            width="48"
          />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};