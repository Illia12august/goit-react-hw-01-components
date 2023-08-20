import PropTypes from 'prop-types';
import {ProfileContainer, Avatar, Name} from './profile.styled'
const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <ProfileContainer>
      <div>
        <Avatar
          src={avatar}
          alt={username}
        
        />
        <Name>{username}</Name>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </ProfileContainer>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string, 
  location: PropTypes.string, 
  avatar: PropTypes.string, 
  stats: PropTypes.object
}
export default Profile