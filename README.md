# MarkDoc

Write markdown with MathJax and extra parameters.

## Usage

```
const fs   = require('fs')
const mdoc = require('mark-doc')

fs.readFile('index.md', 'utf-8', (err, data) => {
  console.log( mdoc(data) )
})
```

in `index.md`

```
-- meta
author: m80126colin
date: 2017-02-04
--

# Hi

Hello world!
```

output:

```
{ parameters: { author: 'm80126colin', date: 2017-02-04T00:00:00.000Z },
  document: '<h1>Hi</h1>\n<p>Hello world!</p>\n' }
```