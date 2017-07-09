import React from 'react';
import classNames from 'classnames/bind';

import styles from './App.local.scss';

const cx = classNames.bind(styles);

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <span className={cx('iconSmile', 'icon-bordered')}></span>
    </div>
  );
}

export default App;
