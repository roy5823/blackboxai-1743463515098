// Modern theme configuration
const modernThemes = {
  light: {
    colors: {
      primary: '59 130 246',    // blue-500
      secondary: '168 85 247',  // purple-500
      accent: '236 72 153',     // pink-500
      background: '249 250 251',// gray-50
      text: '17 24 39',         // gray-900
      card: '255 255 255',      // white
      border: '229 231 235'     // gray-200
    },
    effects: {
      blur: 'md',
      opacity: '80'
    }
  },
  dark: {
    colors: {
      primary: '99 102 241',    // indigo-500
      secondary: '217 70 239',  // fuchsia-500
      accent: '236 72 153',     // pink-500
      background: '17 24 39',   // gray-900
      text: '243 244 246',      // gray-100
      card: '31 41 55',         // gray-800
      border: '55 65 81'        // gray-700
    },
    effects: {
      blur: 'lg',
      opacity: '50'
    }
  }
};

export default modernThemes;