module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  // mode: 'jit',
  // purge: {
  //   enable: true,
  //   content: ['./src/*/.{js,jsx,ts,tsx}'],
  //   options: {
  //     safelist: [/nprogress/, /-webkit-scrollbar/, /icon-/, /swiper/]
  //   }
  // },
  // safelist: [
  //   {pattern: /nprogress/},
  //   {pattern: /-webkit-scrollbar/},
  //   {pattern: /icon-/},
  //   {pattern: /swiper/}
  // ],
  // darkMode: false,
  corePlugins: {},
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '900px',
        'xl': '1200px',
        '2xl': '1440px',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '100': '100%',
        '130p': '130%',
        '150p': '150%',
        '72': '18rem',
        '80': '20rem',

      },
      colors: {
        customBlue: '#2aa7e7',
        customBlack: '#383838',
        deActiveColor: '#cccccc',
        mainBgColor: '#f5f5f5',
        iconColor: '#cdcccc',
        cardIconColor: '#908F8F',
        whatsApp: '#4cb050',
        blackTrans: 'rgba(0,0,0,.7)',
        loadingBack: 'rgba(0, 0, 0, .4)',
      },
      borderRadius: {
        'xl': '1rem'
      },
      fontFamily: {
        shabnam: ["Shabnam", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      minWidth: (theme) => ({
        none: 'none',
        ...theme('spacing'),
      }),
      maxWidth: {
        'screen-sm': '530px',
        'screen-md': '730px',
        'screen-lg': '870px',
        'screen-xl': '1170px',
        'screen-2xl': '1400px',
      },
      minHeight: (theme) => ({
        none: 'none',
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        none: 'none',
        ...theme('spacing'),
      }),
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
      },
      fontSize: {
        'lg': '1.1rem',
        '18': '18px',
        '17': '17px',
        '16': '16px',
        '15': '15px',
        '14': '14px',
        '13': '13px',
        '12': '12px',
      },
      flex: {
        'base': '0 0 auto'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['first', 'last', 'hover', 'focus'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      textOpacity: ['group-hover', 'hover', 'disabled'],
      backgroundOpacity: ['hover', 'disabled'],
    },
  },
  plugins: [],
}