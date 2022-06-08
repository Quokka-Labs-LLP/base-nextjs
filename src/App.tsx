import React from 'react';

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { decrement, increment } from './redux/counter';
import { useGetUsersQuery } from './services/user';
import { RootState } from './redux/store';
import { User } from './services/user'
import './App.css';

export default function App(): JSX.Element {

  const counter = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetUsersQuery('');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = userApi.endpoints.getUser.useQuery()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(counter))}
        >
          Increment
        </button>
        <span>{counter.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(counter))}
        >
          Decrement
        </button>
      </div>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data && data.length > 0 ? (
        <>
          {data.map((user: User) => <p key={user.id}><b>Name: </b>{user.name} {'<'}{user.email}{'>'}</p>)}
        </>
      ) : null}
    </div>
  );
}
