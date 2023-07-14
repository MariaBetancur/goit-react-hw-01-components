import Profile from './Profile.jsx';
import user from '../json/user.json';

import Statistics from './Statistics';
import data from '../json/data.json';
import FriendList from './FriendList'; // eslint-disable-next-line
import friends from '../json/friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../json/transactions.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <div>
        <h1>Lista de Amigos</h1>
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
