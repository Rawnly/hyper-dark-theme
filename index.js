'use strict';

const colors = {
  black: '#000',
  lightblack: '#000',

  white: '#fff',
  lightwhite: '#fff',

  red: '#FF164E',
  lightred: '#F02F5D',

  green: '#82F7C2',
  lightgreen: '#8DD7B6',

  blue: '#0B80ED',
  lightblue: '#659ED4',

  yellow: '#F4C129',
  lightyellow: '#D6BC6C',

  cyan: '#00E0FF',
  lightcyan: '#67B3BE',

  magenta: '#8351EE',
  lightmagenta: '#886CC6'
};

const theme = {
  background: 'rgba(27, 28, 36, 1)',
  foreground: '#fff',
  cursor: colors.yellow || '#fff',
  border: 'transparent',
  padding: '15px 15px',
  vibrance: {
    status: false,
    type: 'ultra-dark'
  },
  colors: colors
};



module.exports.decorateConfig = config => {
    config.settings = config.settings || {};

    const options = Object.assign({}, config, {
      borderColor: config.settings.border || theme.border,
      foregroundColor: config.settings.foreground || theme.foreground,
      cursorColor: config.settings.cursor || theme.cursor,
      colors: config.settings.colors || theme.colors,
      padding: config.settings.padding || theme.padding,
      backgroundColor: config.settings.background || theme.background,
      vibrance: config.vibrance || theme.vibrance,
      vibrancy: config.vibrance.status || theme.vibrance.status
    });

    if (options.vibrance.status == true || options.vibrancy == true) {
      let vibType = options.vibrance.type || theme.vibrance.type;
      options.backgroundColor = "rgba(27, 28, 36, .5)";
      module.exports.onWindow = browserWindow => browserWindow.setVibrancy(vibType)
    }

    return options;


};
