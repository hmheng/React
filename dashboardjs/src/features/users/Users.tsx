import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  usersAsync,
  selectUsers,
} from './usersSlice';
import styles from './Users.module.css';
import { RootState } from '../../app/store';
import { connect, ConnectedProps } from 'react-redux';
import { useState } from 'react';

export function Users() {
  const _users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>
          {
            _users &&
            (_users)
        }</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(usersAsync())}
        >
          Get Users
        </button>
      </div>
    </div>
  );
}