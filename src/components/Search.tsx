import React from 'react';

type Props = {
  searchQuery: string,
  setSearchQuery: (value: string) => void,
  applyQuery: (value: string) => void,
  queryHistory: string[][],
};

export const Search: React.FC<Props> = (props) => {
  const {
    searchQuery,
    setSearchQuery,
    applyQuery,
    queryHistory,
  } = props;

  return (
    <div className="search">
      <input
        className="search__input"
        value={searchQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(event.target.value);
          applyQuery(event.target.value);
        }}
      />
      <ul className="search__history">
        {queryHistory.map((item: string[]) => (
          <li key={item[1]} className="history-item">
            {item[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};
