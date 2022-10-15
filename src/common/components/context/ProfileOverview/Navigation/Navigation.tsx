import Tab, { TabOption } from '@/common/components/structure/Tab/Tab';
import { useTabProviderContext } from '@/common/components/structure/Tab/TabProvider';

import * as S from './Navigation.styles';

type NavigationProps = {
  profileLoginName: string;
  profileUrlImg: string;
  tabs: TabOption[];
};

const Navigation = ({
  profileLoginName,
  profileUrlImg,
  tabs,
}: NavigationProps) => {
  const { tabIdentifierActive, setTabIdentifierActive } =
    useTabProviderContext();

  const handleOnClickTab = (tab: string) => {
    setTabIdentifierActive(tab);
  };

  return (
    <S.ContainerDiv>
      <S.ProfileDiv>
        <S.ProfileImg src={`${profileUrlImg}`} alt="small profile" />
        <S.ProfileNameSpan>{profileLoginName}</S.ProfileNameSpan>
      </S.ProfileDiv>
      <S.TabOptionsDiv>
        {tabs.map((tab, index) => (
          <Tab
            {...tab}
            onClickTab={handleOnClickTab}
            tabActive={tab.tabIdentifier === tabIdentifierActive}
            key={index.toString()}
          />
        ))}
      </S.TabOptionsDiv>
    </S.ContainerDiv>
  );
};

export default Navigation;
