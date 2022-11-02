import { useSearchParams } from 'react-router-dom';

export const useTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get('tab');

  return {
    tab,
    setTab: function (tab: string) {
      setSearchParams({ tab });
    },
  };
};
