import * as React from 'react';

import { loader } from '@/common/icons';
import type { IconName } from '@/common/icons/loader';

import * as S from './Tab.styles';

export type TabOption<T = string> = {
  tabIdentifier: T;
  iconName?: IconName;
  label: string;
  counter?: number;
};

export type TabProps = TabOption & {
  tabActive?: boolean;
  onClickTab: (tab: string) => void;
};

const Tab = ({
  tabIdentifier,
  iconName,
  label,
  counter,
  onClickTab,
  tabActive = false,
}: TabProps) => {
  const hasCounter = counter !== undefined;

  const handleClickTab = () => {
    onClickTab(tabIdentifier);
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

export default React.memo(Tab);
