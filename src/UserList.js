import React from 'react';

function User({user}) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.vvv@gmail.com',
    },
    {
      id: 2,
      username: 'zzzzz',
      email: 'private.zzzz@gmail.com',
    },
    {
      id: 3,
      username: 'vezzzz',
      email: 'public.vzs2vv@gmail.com',
    },
  ];

  return (
    <div>
        {
            users.map(
                user => (<User user={user} key={user.id} />)
            )
        }
    </div>
  );
}

export default UserList;
