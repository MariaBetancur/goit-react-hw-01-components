import React from 'react';
import Profile from './profile/Profile';
import user from '../json/user.json';

import Statistics from './statistics/Statistics';
import data from '../json/data.json';
import FriendList from './friendList/FriendList'; // eslint-disable-next-line
import friends from '../json/friends.json';

import TransactionHistory from './transactionHistory/TransactionHistory';
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
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
