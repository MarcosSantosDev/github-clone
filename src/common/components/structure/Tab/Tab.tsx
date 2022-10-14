import { loader } from '@/common/icons';
import type { IconName } from '@/common/icons/loader';

import * as S from './Tab.styles';
import { useTabProviderContext } from './TabProvider';

export type TabOption = {
  tabIdentifier: string;
  iconName?: IconName;
  label: string;
  counter?: number;
};

type TabProps = TabOption;

const Tab = ({ tabIdentifier, iconName, label, counter }: TabProps) => {
  const { tabIdentifierActive, setTabIdentifierActive } =
    useTabProviderContext();

  const hasCounter = counter !== undefined;
  const tabActive = tabIdentifier === tabIdentifierActive;

  const handleClickTab = () => {
    setTabIdentifierActive(tabIdentifier);
  };

  return (
    <S.ContainerDiv
      className={tabActive ? 'active' : ''}
      onClick={handleClickTab}
    >
      <S.TabContentDiv>
        {iconName ? <S.TabIcon>{loader(iconName, 18)}</S.TabIcon> : null}
        <S.TabSpan>{label}</S.TabSpan>
        {hasCounter && <S.TabCounter>{counter}</S.TabCounter>}
      </S.TabContentDiv>
    </S.ContainerDiv>
  );
};

export default Tab;
