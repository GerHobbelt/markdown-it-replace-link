/* eslint-env mocha, es6 */

let path = require('path');
let generate = require('@gerhobbelt/markdown-it-testgen');
let expect = require('chai').expect;
let fs = require('fs');

describe('markdown-it-replace-link', function () {
  let md = require('@gerhobbelt/markdown-it')({
    html: true,
    linkify: true,
    typography: true,
    replaceLink: function (link, env, token) {
      if (token.type === 'image') {
        return 'image/' + link;
      }
      if (link === 'a') {
        return env.x + link;
      }
      return 'http://me.com/' + link;
    }
  }).use(require('../'));
  generate(path.join(__dirname, 'fixtures/toc.txt'), md);

  it('Passes on env', function (done) {
    let html = md.render(fs.readFileSync(path.join(__dirname, 'fixtures/env.txt'), 'utf-8'), {
      x: 'test/'
    });
    expect(html).to.equal('<p><a href="test/a">Hello</a></p>\n');
    done();
  });
});
