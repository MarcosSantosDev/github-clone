import { LinkProps as LinkRRDProps } from 'react-router-dom';

import theme from '@/styles/theme';

import * as S from './Link.styles';

type Size = 'small' | 'medium' | 'large';

type CustomProps = {
  size?: Size;
  bold?: boolean;
  disableUnderline?: boolean;
};

type LinkProps = LinkRRDProps & CustomProps;

function getLinkCustomStyles({
  size = 'small',
  bold = false,
  disableUnderline = false,
}: Pick<
  CustomProps,
  'size' | 'bold' | 'disableUnderline'
>): React.CSSProperties {
  const staticStyles = {
    fontWeight: bold ? 'bold' : 'normal',
    textDecoration: disableUnderline ? 'none' : undefined,
  };

  switch (size) {
    case 'large':
      return {
        fontSize: theme.typograph.font.size.large,
        ...staticStyles,
      };
    case 'medium':
      return {
        fontSize: theme.typograph.font.size.medium,
        ...staticStyles,
      };
    default:
      return {
        fontSize: theme.typograph.font.size.xsmall,
        ...staticStyles,
      };
      break;
  }
}

export const Link = ({ size, bold, disableUnderline, ...props }: LinkProps) => {
  const linkCustomStyles = getLinkCustomStyles({
    size,
    bold,
    disableUnderline,
  });

  return <S.Link {...props} style={linkCustomStyles} />;
};
