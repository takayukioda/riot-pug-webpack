const { registerPreprocessor } = require('@riotjs/compiler');
const { render } = require('pug');

registerPreprocessor('template', 'pug', (code, options) => {
  const { file } = options;

  return {
    code: render(code),
    pretty: true,
    doctype: 'html',
  }
});
