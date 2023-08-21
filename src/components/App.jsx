import Profile from "./profile/Profile";
// import StatisticList from './statistics/Statistics'
import user from './profile/user.json'
export default function App() {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      {/* <StatisticList /> */}
    </>
  );
};
