import Profile from "./profile/Profile";
import StatisticList from './statistics/StatisticList'
import statistics from './statistics/data.json';
import user from './profile/user.json'
import FriendList from "./friends/FriendList";
import friends from './friends/friends.json'
import TransactionList from "./transactions/Transaction";
import transactions from './transactions/transactions.json'
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
      <StatisticList 
      statistics={statistics}
      />
      <FriendList friends={friends}/>
      <TransactionList transactions={transactions}/>
    </>
  );
};
