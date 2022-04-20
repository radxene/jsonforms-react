import React from 'react';

import { Dashboard } from '@/components/Dashboard';
import { ExampleForm } from '@/builder/jsonforms/example';

import './App.scss';

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
