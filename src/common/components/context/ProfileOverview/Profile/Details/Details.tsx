import * as React from 'react';

import { loader } from '@/common/icons';
import type { IconName } from '@/common/icons';
import { User } from '@/common/types';

import * as S from './Details.styles';

type DetailsList = {
  iconName: IconName;
  information: string | null;
};

type DetailsProps = {
  user: User;
};

const Details = ({ user }: DetailsProps) => {
  const { company, blog, location, email, followers, following } = user;

  const detailsList: DetailsList[] = [
    { iconName: 'briefcase', information: company },
    { iconName: 'location', information: location },
    { iconName: 'mail', information: email },
    { iconName: 'link', information: blog },
  ];

  return (
    <S.Container>
      <S.Ul>
        <S.Li>
          {loader('organization', 18)}
          <span>
            <b>{followers}</b> followers · <b>{following}</b> following
          </span>
        </S.Li>
      </S.Ul>

      <S.Ul>
        {detailsList
          .filter(({ information }) => Boolean(information))
          .map(({ iconName, information }) => (
            <S.Li key={iconName}>
              {loader(iconName, 18)} <span>{information}</span>
            </S.Li>
          ))}
      </S.Ul>
    </S.Container>
  );
};

export default React.memo(Details);
