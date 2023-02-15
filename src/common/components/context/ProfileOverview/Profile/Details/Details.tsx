import * as React from 'react';

import { LinkWrapper } from '@/common/components/structure';
import { github } from '@/common/constants';
import { loader } from '@/common/icons';
import { User } from '@/common/types';

import * as S from './Details.styles';

export type DetailsProps = Pick<
  User,
  | 'login'
  | 'company'
  | 'blog'
  | 'location'
  | 'email'
  | 'followers'
  | 'following'
>;

const Details = ({
  login,
  company,
  blog,
  location,
  email,
  followers,
  following,
}: DetailsProps) => {
  return (
    <S.Container>
      <S.Ul>
        <S.Li>
          <LinkWrapper to={`${github.GITHUB_URL}/${login}?tab=followers`}>
            {loader('organization', 18)}
            <b>{followers}</b> <span>followers</span>
          </LinkWrapper>
          ·
          <LinkWrapper to={`${github.GITHUB_URL}/${login}?tab=following`}>
            <b>{following}</b> <span>following</span>
          </LinkWrapper>
        </S.Li>
      </S.Ul>

      <S.Ul>
        {company ? (
          <S.Li aria-label={`Work company: ${company}`}>
            {loader('briefcase', 18)} <span>{company}</span>
          </S.Li>
        ) : null}
        {location ? (
          <S.Li aria-label={`Home location: ${location}`}>
            {loader('location', 18)} <span>{location}</span>
          </S.Li>
        ) : null}
        {email ? (
          <S.Li aria-label={`Mail address: ${email}`}>
            {loader('mail', 18)} <span>{email}</span>
          </S.Li>
        ) : null}
        {blog ? (
          <S.Li aria-label={`Blog: ${blog}`}>
            {loader('link', 18)}{' '}
            <LinkWrapper to={blog}>
              <span>{blog}</span>
            </LinkWrapper>
          </S.Li>
        ) : null}
      </S.Ul>
    </S.Container>
  );
};

export default React.memo(Details);
