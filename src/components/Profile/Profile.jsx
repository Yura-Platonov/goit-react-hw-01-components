import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.list}>
        <li>
          <span className={css.label}>Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};