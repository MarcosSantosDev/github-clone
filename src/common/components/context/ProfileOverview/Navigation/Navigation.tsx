import { useSearchParams } from 'react-router-dom';

import Tab, { TabOption } from '@/common/components/structure/Tab/Tab';

import * as S from './Navigation.styles';

type NavigationProps = {
  profileLoginName: string;
  profileUrlImg: string;
};

const tabs: TabOption[] = [
  { tabIdentifier: 'overview', iconName: 'openPreview', label: 'Overview' },
  {
    tabIdentifier: 'repositories',
    iconName: 'library',
    label: 'Repositories',
    counter: 38,
  },
  { tabIdentifier: 'projects', iconName: 'graph', label: 'Projects' },
  { tabIdentifier: 'packages', iconName: 'extensions', label: 'Packages' },
  {
    tabIdentifier: 'stars',
    iconName: 'starfull',
    label: 'Stars',
    counter: 143,
  },
];

const defaultTabActive = tabs[0].tabIdentifier;

const getTabActive = (tabParam: string | null) => {
  if (tabParam !== null) {
    const validTab = tabs.find(tab => tab.tabIdentifier === tabParam);

    if (validTab) {
      return tabParam;
    }
  }

  return defaultTabActive;
};

const Navigation = ({ profileLoginName, profileUrlImg }: NavigationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get('tab');

  const tabActive = getTabActive(tabParam);

  const handleOnClickTab = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <S.ContainerDiv>
      <S.ProfileDiv>
        <S.ProfileImg src={`${profileUrlImg}`} alt="small profile" />
        <S.ProfileNameSpan>{profileLoginName}</S.ProfileNameSpan>
      </S.ProfileDiv>
      <S.TabOptionsDiv>
        {tabs.map(tab => (
          <Tab
            {...tab}
            onClickTab={handleOnClickTab}
            tabActive={tab.tabIdentifier === tabActive}
            key={tab.tabIdentifier}
          />
        ))}
      </S.TabOptionsDiv>
    </S.ContainerDiv>
  );
};

export default Navigation;
