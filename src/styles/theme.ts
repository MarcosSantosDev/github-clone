type Sizes = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
};

export type AppTheme = {
  typograph: {
    font: {
      size: Sizes;
      family: {
        main: string;
      };
    };
  };
  colors: {
    main: string;
    secondary: string;
    neutral: {
      white: string;
      black: string;
      gray: Record<string, string>;
    };
  };
  border: {
    colors: {
      main: string;
      secondary: string;
    };
    radius: Sizes;
  };
};

const theme: AppTheme = {
  typograph: {
    font: {
      size: {
        xsmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.5rem',
      },
      family: {
        main: 'Roboto',
      },
    },
  },
  colors: {
    main: '#22272e',
    secondary: '#adbac7',
    neutral: {
      white: '#f0f8ff',
      black: '#2d333b',
      gray: {
        50: '#adbac7',
        100: '#c9d1d9',
        150: '',
        200: '#85898b',
        250: '',
        300: '#768390',
        350: '',
        400: '#373e47',
        450: '',
        500: '',
        550: '',
        600: '',
        650: '',
        700: '',
        750: '',
        800: '',
        850: '',
        900: '',
        950: '',
        1000: '',
      },
    },
  },
  border: {
    colors: {
      main: '#cdd9e51a',
      secondary: '#444c56',
    },
    radius: {
      xsmall: '',
      small: '6px',
      medium: '',
      large: '',
    },
  },
};

export default theme;
