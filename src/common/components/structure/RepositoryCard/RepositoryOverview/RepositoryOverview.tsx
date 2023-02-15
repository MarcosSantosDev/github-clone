import * as React from 'react';

import { formatDistanceStrict } from 'date-fns';

import { Link, LinkWrapper, RoundText } from '@/common/components/structure';
import { github } from '@/common/constants';
import { loader } from '@/common/icons';
import { Repository } from '@/common/types';
import { languages_colors } from '@/static/colors.json';

import * as S from './RepositoryOverview.styles';

export type RepositoryOverviewProps = React.HTMLAttributes<HTMLDivElement> & {
  repository: Repository;
};

export type LanguageColors = {
  [key: string]: string | null;
};

function limitTextAndAddEllipsis(text: string, endSize = 0) {
  const isVeryBig = text.length > endSize;

  if (isVeryBig) {
    return `${text.substring(0, endSize)} ...`;
  }

  return text;
}

function formatDate(date: string) {
  const formatedDate = formatDistanceStrict(new Date(date), new Date(), {
    addSuffix: true,
  });

  return formatedDate;
}

const getLanguageColor = (color: string) => {
  const languageColor: LanguageColors = languages_colors;

  return languageColor[color] || '#000';
};

const RepositoryOverview = ({
  repository,
  ...restProps
}: RepositoryOverviewProps) => {
  return (
    <S.RepositoryContainerDiv {...restProps}>
      <S.RepositoryCoreInfoWrapperDiv>
        <S.RepositoryNameContentDiv>
          <Link to={repository.html_url} size="medium" bold>
            {repository.name}
          </Link>
          <RoundText
            content={repository.private ? 'Private' : 'Public'}
            type="text"
            variant="primary"
          />
        </S.RepositoryNameContentDiv>
        <S.Paragraph>
          {limitTextAndAddEllipsis(repository.description || '', 200)}
        </S.Paragraph>
      </S.RepositoryCoreInfoWrapperDiv>
      <S.RepositoryTopicWrapperDiv>
        {repository.topics.slice(0, 7).map(topic => (
          <RoundText
            key={topic}
            content={topic}
            variant="secondary"
            type="link"
            linkURL={`${github.GITHUB_URL}/topics/${topic}`}
          />
        ))}
      </S.RepositoryTopicWrapperDiv>
      <S.RepositorySummaryWrapperDiv>
        {repository.language ? (
          <S.SummaryContainerDiv>
            <S.ColoredCircleDiv color={getLanguageColor(repository.language)} />
            <S.Paragraph>{repository.language}</S.Paragraph>
          </S.SummaryContainerDiv>
        ) : null}
        {repository.stargazers_count > 0 ? (
          <S.SummaryContainerDiv>
            <LinkWrapper to={`${repository.html_url}/stargazers`}>
              {loader('regstar', 15)}
              <S.Paragraph>{repository.stargazers_count}</S.Paragraph>
            </LinkWrapper>
          </S.SummaryContainerDiv>
        ) : null}
        {repository.license ? (
          <S.SummaryContainerDiv>
            {loader('law', 15)}
            <S.Paragraph>{repository.license.name}</S.Paragraph>
          </S.SummaryContainerDiv>
        ) : null}
        {repository.updated_at ? (
          <S.SummaryContainerDiv>
            <S.Paragraph>
              Updated {formatDate(repository.updated_at)}
            </S.Paragraph>
          </S.SummaryContainerDiv>
        ) : null}
      </S.RepositorySummaryWrapperDiv>
      <S.ActionWrapperInRepositoryDiv>
        {/**
         * TODO:
         *  - Star button
         *  - Graph component
         */}
      </S.ActionWrapperInRepositoryDiv>
    </S.RepositoryContainerDiv>
  );
};

export default React.memo(RepositoryOverview);
