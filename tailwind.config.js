export const content = [
  './src/**/*.{html,js,jsx,ts,tsx}',
  './src/sections/**/*.{js,jsx}',
];
export const theme = {
  extend: {
    colors: {
      primary: '#dc9e11',
      secondary: '#F1BE48',
      tertiary: '#EFA900',

      lightBlue: '#877dfa',
      lightPink: '#FFD700',
      lightGreen: '#F59E0B',
    },
    lineHeight: {
      12: '1.2',
      13: '1.3',
      16: '1.6',
    },
  },
  screens: {
    lg: { max: '1800px' },
    md: { max: '990px' },
    sm: { max: '600px' },
    xs: { max: '400px' },
    minmd: '1700px',
    minlg: '2100px',
  },
  fontFamily: {
    IBMPlex: ['IBM Plex Sans', 'sans-serif'],
  },
};
export const plugins = [];
