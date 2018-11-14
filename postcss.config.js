module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
      preserve: false //Удалять свойства недоступные для данной настройки **Только для stage 0**
    },
    // 'cssnano': {}
  }
};