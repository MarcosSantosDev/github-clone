import { LinkProps as LinkRRDProps } from 'react-router-dom';

import * as S from './LinkWrapper.styles';

type CustomProps = {
  disableHoverUnderline?: boolean;
};

type LinkWrapperProps = LinkRRDProps & CustomProps;

function getLinkCustomStyles({
  disableHoverUnderline = false,
}: Pick<CustomProps, 'disableHoverUnderline'>): React.CSSProperties {
  const staticStyles = {
    textDecoration: disableHoverUnderline ? 'none' : '',
  };

  return staticStyles;
}

export const LinkWrapper = ({
  disableHoverUnderline,
  ...props
}: LinkWrapperProps) => {
  const linkCustomStyles = getLinkCustomStyles({
    disableHoverUnderline,
  });

  return <S.LinkWrapper {...props} style={linkCustomStyles} />;
};
