import Tab, { TabOption } from '@/common/components/structure/Tab/Tab';
import TabProvider from '@/common/components/structure/Tab/TabProvider';

import * as S from './Navigation.styles';

type NavigationProps = {
  profileLoginName: string;
  profileUrlImg: string;
  tabs: TabOption[];
  tabIdentifierActiveDefault: string;
};

const Navigation = ({
  profileLoginName,
  profileUrlImg,
  tabs,
  tabIdentifierActiveDefault,
}: NavigationProps) => {
  return (
    <S.ContainerDiv>
      <S.ProfileDiv>
        <S.ProfileImg src={`${profileUrlImg}`} alt="small profile" />
        <S.ProfileNameSpan>{profileLoginName}</S.ProfileNameSpan>
      </S.ProfileDiv>
      <S.TabOptionsDiv>
        <TabProvider tabIdentifierActiveDefault={tabIdentifierActiveDefault}>
          {tabs.map((tab, index) => (
            <Tab {...tab} key={index.toString()} />
          ))}
        </TabProvider>
      </S.TabOptionsDiv>
    </S.ContainerDiv>
  );
};

export default Navigation;
