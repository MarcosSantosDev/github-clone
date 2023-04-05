import { loader } from '@/common/icons';

import * as S from './CardFeedback.styles';

type CardFeedbackProps = {
  isLoading?: boolean;
  isEmpty?: boolean;
};

const CardFeedback = ({
  isLoading = false,
  isEmpty = false,
}: CardFeedbackProps) => {
  if (isLoading || isEmpty) {
    return (
      <S.ContainerDiv role="contentinfo">
        {isLoading ? (
          <S.Spinner />
        ) : (
          <S.EmptyContent>
            {loader('githubinverted', 28)}
            <S.Title>
              We couldn't find the profile you were looking for.
            </S.Title>
          </S.EmptyContent>
        )}
      </S.ContainerDiv>
    );
  }

  return null;
};

export default CardFeedback;
