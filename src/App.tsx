import React from 'react';
import { RepoList } from './components/RepoList';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <RepoList />
    </div>
  );
};
