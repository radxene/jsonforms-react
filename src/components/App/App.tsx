import React from 'react';

import logo from '@/components/App/logo.svg';

import '@/components/App/App.scss';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Project is created !</p>
      </header>
    </div>
  );
};
