import typo from 'windicss/plugin/typography';

export default {
  darkMode: 'class',
  plugins: [typo()],
  safelist: 'prose prose-sm m-auto text-left',
  theme: {
    extend: {
      spacing: {
        half: '50%',
        '1/20': '5%',
        '1/10': '10%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
};
