import { useLocation } from 'react-router-dom';

type PageTitleByLocationArgs = {
  pathname: string;
  search: string;
};

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getPathValue(pathData: string) {
  const paths = pathData.split('/');
  const [lastPath] = paths.reverse();

  return capitalizeFirstLetter(lastPath);
}

function getSearchValueByKey(searchData: string, key: string) {
  const searchQueries = searchData.replace('?', '').split('&');

  const queryKeyFound = searchQueries.find(query => query.includes(key));

  if (queryKeyFound) {
    const [, value] = queryKeyFound.split('=');
    return capitalizeFirstLetter(value);
  }

  return '';
}

function getPageTitleByLocation({ pathname, search }: PageTitleByLocationArgs) {
  const pageTitle = getSearchValueByKey(search, 'tab');

  if (pageTitle.length === 0) {
    return getPathValue(pathname);
  }

  return pageTitle;
}

export const usePageTitle = () => {
  const location = useLocation();

  const pageTitleByLocation = getPageTitleByLocation({
    pathname: location.pathname,
    search: location.search,
  });

  return pageTitleByLocation;
};
