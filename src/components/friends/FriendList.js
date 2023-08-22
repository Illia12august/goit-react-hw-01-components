import PropTypes from 'prop-types';
import {
  Friends,
  FriendItem,
  FriendName,
  FriendImg,
  FriendStatus,
} from './friends.styled';
export default function FriendList(friends) {
  return (
    <section>
      <Friends>
        {friends.friends.map(friend => {
          return (
            <FriendItem key={friend.id}>
              <FriendStatus
                style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
              ></FriendStatus>
              <FriendImg src={friend.avatar} alt={friend.name}></FriendImg>
              <FriendName>{friend.name}</FriendName>
            </FriendItem>
          );
        })}
      </Friends>
    </section>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    )
  ,
};
