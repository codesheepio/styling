import React from 'react';
import classNames from 'classnames';

import styles from './App.scss';

const cx = classNames.bind(styles);

function App() {
  console.log(styles);

  return (
    <div>
      <h1>Hello</h1>
      <span className={`${styles.iconSmile} icon-bordered`}></span>
    </div>
  );
}

export default App;
