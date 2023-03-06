import { IconName } from '@/common/icons/loader';

export type Sizes = 'small' | 'medium' | 'large';

export type Variant = 'primary' | 'secondary' | 'success';

type VariantCustomColor = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

export type ButtonVariant = {
  [key in Variant]: VariantCustomColor;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  size?: Sizes;
  variant?: Variant;
  icon?: {
    name: IconName;
    /**
     * Icon position
     */
    side: 'left' | 'right';
    /**
     * Icon size
     *
     * `default`: 16
     */
    size?: number;
  };
};
