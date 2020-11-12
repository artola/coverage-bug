'use strict';

module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
        loose: false,
      },
    ],
  ],
};
