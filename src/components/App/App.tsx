import React from 'react';

import { Dashboard } from '@/components/Dashboard';
import { ExampleForm } from '@/builder/forms/example';

import '@/components/App/App.scss';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Dashboard>
        <ExampleForm />
      </Dashboard>
    </div>
  );
};
