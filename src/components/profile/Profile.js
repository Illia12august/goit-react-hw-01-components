import PropTypes from 'prop-types';
import {ProfileContainer, Avatar, Name, Descr, Stats, StatsEl} from './profile.styled'
const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <ProfileContainer>
      <div>
        <Avatar
          src={avatar}
          alt={username}
        
        />
        <Name>{username}</Name>
        <Descr>{tag}</Descr>
        <Descr>{location}</Descr>
      </div>

      <Stats>
        <StatsEl>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </StatsEl>
        <StatsEl>
          <span>Views </span>
          <span>{stats.views}</span>
        </StatsEl>
        <StatsEl>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </StatsEl>
      </Stats>
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