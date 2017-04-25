import React from 'react';

import SearchBar from './components/SearchBar';
import cc from './common.less';


export default function App({children}) {
  return (
  <div>
    <header>
      <SearchBar />
    </header>
    <main role="mail" className={cc.container}>
      {children}
    </main>
  </div>
  );
}
