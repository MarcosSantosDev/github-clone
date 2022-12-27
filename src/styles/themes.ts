type Sizes = {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
};

type ColorContent = {
  normal: {
    [key in string]: string;
  };
  hover: {
    [key in string]: string;
  };
};

export type AppThemeProps = {
  typograph: {
    font: {
      size: Sizes;
      family: {
        main: string;
      };
    };
    weight: {
      regular: number;
      bold: number;
    };
  };
  colors: {
    text: ColorContent;
    background: ColorContent;
    border: ColorContent;
  };
  radius: {
    small: string;
    medium: string;
    circle: string;
  };
};

export const blackTheme: AppThemeProps = {
  typograph: {
    font: {
      size: {
        xxsmall: '0.75rem',
        xsmall: '0.875rem',
        small: '1rem',
        medium: '1.25rem',
        large: '1.5rem',
      },
      family: {
        main: 'sans-serif',
      },
    },
    weight: {
      regular: 400,
      bold: 600,
    },
  },
  colors: {
    text: {
      normal: {
        [1]: '#fff',
        [2]: '#cdd9e5',
        [3]: '#adbac7',
        [4]: '#768390',
        [5]: '#57ab5a',
        [6]: '#ec775c',
        [7]: '#539bf5',
        [8]: '#8b949e',
      },
      hover: {
        [1]: '#cdd9e5b3',
      },
    },
    background: {
      normal: {
        [1]: '#636e7b66',
        [2]: '#373e47',
        [3]: '#2d333b',
        [4]: '#22272e',
        [5]: '#347d39',
      },
      hover: {
        [1]: '#444c56',
        [2]: '#46954a',
        [3]: '#909dab1f',
      },
    },
    border: {
      normal: {
        [1]: '#768390',
        [2]: '#444c56',
        [3]: '#cdd9e51a',
        [4]: '#347d39',
        [5]: '#fd8c73',
      },
      hover: {},
    },
  },
  radius: {
    small: '0.375rem',
    medium: '2rem',
    circle: '50%',
  },
} as const;
