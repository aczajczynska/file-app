const theme = {
    colors: {
        blueLight: "#8abbf5",
        dodgerBlue : "#1E90FF",
        white: "#FFFFFF",
        black: "#000000",
        silverChalice: '#9f9f9f',
        silver: '#bfbfbf',
        nobel: '#B3B3B3',
        grey: '#808080',
        green: '#009933',
        darkFont: "#434343",
        moonLight: "#f2cf7c",
        moonDark: "#cc9460",
        error: "#ff6063",
    },
    fontSize: {
        tinyXs: '12px',
        minuscule: '14px',
        tiny: '16px',
        small: '18px',
        normal: '20px',
        large: '23px',
        huge: '25px',
        hugex: '30px',
        hugeS: '48px',
        hugeM: '55px',
        hugeL: '87px',
    },
    spacing: {
        minuscule: '5px',
        tiny: '10px',
        small: '15px',
        normal: '20px',
        large: '25px',
        big: '30px',
        huge: '35px',
        hugex: '40px',
  },
    fontWeight: {
        light: 300,
        regular: 500,
        semiBold: 600,
        bolder: 700,
  },
    fontFamily: {
        primary: 'Montserrat',
        secondary: 'Lato',
        third: 'Roboto',
  },
   device: {
    mobile: 'screen and (max-width: 767)',
    mobileUp: 'screen and (min-width: 767)',
  },

};

export default theme;

export type TTheme = typeof theme;