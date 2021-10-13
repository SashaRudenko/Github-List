import React from 'react';

type Props = {
  orgsBySearch: Orgs[];
  reposBySearch: Repos[];
};

export const List: React.FC<Props> = (props) => {
  const { orgsBySearch, reposBySearch } = props;

  return (
    <div className="list">
      <ul className="orgs-list">
        {orgsBySearch && orgsBySearch.map((item: Orgs) => (
          <li key={item.id} className="orgs-item">
            <img
              className="orgs-list__img list__item"
              src={item.avatar_url}
              alt={item.login}
            />
            <p className="orgs-list__login list__item">
              Login:&nbsp;
              {item.login}
            </p>
            <p className="orgs-list__description list__item">
              Description:&nbsp;
              {item.description && item.description}
            </p>
            <a href={item.repos_url}>Repos link</a>
          </li>
        ))}
      </ul>
      <ul className="repos-list">
        {reposBySearch && reposBySearch.map((item: Repos) => (
          <li key={item.id} className="repos-item">
            <p className="repos-list__fullname list__item">
              Name:&nbsp;
              {item.full_name}
            </p>
            <p className="repos-list__language list__item">
              Language:&nbsp;
              {item.language}
            </p>
            <p className="repos-list__description list__item">
              Description:&nbsp;
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
