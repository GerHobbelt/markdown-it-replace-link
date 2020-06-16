# markdown-it-replace-link

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-replace-link/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-replace-link)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-replace-link.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-replace-link)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-replace-link/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-replace-link?branch=master)

> markdown-it plugin for replacing links (image & text) in the markdown document.

## Usage

#### Enable plugin


```js
var md = require('markdown-it')({
    replaceLink: function (link, env) {
        return link + "?c=" + Date.now();
    }
}).use(require('markdown-it-replace-link')); // <-- this use(package_name) is required
```

#### Example

```md
[Hello](test)
```

and use this

```js
var md = require('markdown-it')({
    replaceLink: function (link, env) {
        return "http://me.com/" + link;
    }
}).use(require('markdown-it-replace-link'));
```


This will result in the link prefixed with the `http://me.com/` like:

```html
<p><a href="http://me.com/test">Hello</a></p>
```

Both images and html links will be processed.

### Testing

To run the tests use:
```bash
npm run test
```
