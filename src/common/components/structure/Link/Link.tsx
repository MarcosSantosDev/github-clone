import { LinkProps as LinkRRDProps } from 'react-router-dom';

import { blackTheme } from '@/styles/themes';

import * as S from './Link.styles';

type Size = 'xxsmall' | 'medium' | 'large';

type CustomProps = {
  size?: Size;
  bold?: boolean;
  disableUnderline?: boolean;
};

type LinkProps = LinkRRDProps & CustomProps;

function getLinkCustomStyles({
  size = 'xxsmall',
  bold = false,
  disableUnderline = false,
}: Pick<
  CustomProps,
  'size' | 'bold' | 'disableUnderline'
>): React.CSSProperties {
  const staticStyles = {
    fontWeight: bold
      ? blackTheme.typograph.weight.bold
      : blackTheme.typograph.weight.regular,
    textDecoration: disableUnderline ? 'none' : undefined,
  };

  switch (size) {
    case 'large':
      return {
        fontSize: blackTheme.typograph.font.size.large,
        ...staticStyles,
      };
    case 'medium':
      return {
        fontSize: blackTheme.typograph.font.size.medium,
        ...staticStyles,
      };
    default:
      return {
        fontSize: blackTheme.typograph.font.size.xxsmall,
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
