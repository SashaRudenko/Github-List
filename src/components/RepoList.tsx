import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuid4 } from 'uuid';
import { Search } from './Search';
import { List } from './List';
import { Header } from './Header';
import { getRepos, getOrgs } from '../api/api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = (f: (...args: any[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout;

  return (...args: string[]) => {
    clearTimeout(timerId);
    timerId = setInterval(f, delay, ...args);
  };
};

const queryHistory: string[][] = [];

export const RepoList = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [appliedQuery, setAppliedQuery] = useState<string>('');
  const [reposBySearch, getReposBySearch] = useState<Repos[]>([]);
  const [orgsBySearch, getOrgsBySearch] = useState<Orgs[]>([]);

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 500),
    [],
  );

  useEffect(() => {
    if (appliedQuery !== '') {
      getRepos(appliedQuery).then((data) => getReposBySearch(data.items));
      queryHistory.unshift([appliedQuery, uuid4()]);
      queryHistory.length = 5;
    }
  }, [appliedQuery]);

  useEffect(() => {
    if (appliedQuery !== '') {
      getOrgs()
        .then((data) => getOrgsBySearch(data
          .filter((item: Orgs) => item.login.includes(appliedQuery))));
    }
  }, [appliedQuery]);

  return (
    <>
      <Header />
      <div className="main-container">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          applyQuery={applyQuery}
          queryHistory={queryHistory}
        />
        <List
          orgsBySearch={orgsBySearch}
          reposBySearch={reposBySearch}
        />
      </div>
    </>
  );
};
