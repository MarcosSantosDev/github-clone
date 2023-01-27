export type RoundTextType = 'text' | 'link';

export type RoundTextVariant = 'primary' | 'secondary' | 'success';

export type RoundTextContainerDivProps = {
  spacing?: '1' | '2';
  type: RoundTextType;
  variant: RoundTextVariant;
};

type CustomColors = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type LinkVariantColor = Record<
  RoundTextVariant,
  {
    normal: CustomColors;
    hover: CustomColors;
  }
>;

export type TextVariantColor = Record<RoundTextVariant, CustomColors>;
