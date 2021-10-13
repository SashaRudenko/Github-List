const BASE_URL_REPOS = 'https://api.github.com/search/repositories?q=';
const BASE_URL_ORGS = 'https://api.github.com/organizations';

export const getRepos = (url) => {
  return fetch(`${BASE_URL_REPOS}${url}&per_page=20`)
    .then(response => response.json());
};

export const getOrgs = () => {
  return fetch(`${BASE_URL_ORGS}`)
    .then(response => response.json());
};
