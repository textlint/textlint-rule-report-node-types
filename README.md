# textlint-rule-report-node-types [![Build Status](https://travis-ci.org/textlint/textlint-rule-report-node-types.svg?branch=master)](https://travis-ci.org/textlint/textlint-rule-report-node-types)

textlint rule that report error by node's type for **debugging**.

Opposite <-> [textlint-rule-ignore-node-types](https://github.com/textlint/textlint-rule-ignore-node-types "textlint-rule-ignore-node-types").

## Installation

    npm install textlint-rule-report-node-types

## Usage

If you want to report `BlockQuote` node, define `"BlockQuote"` to `"nodeTypes"`.

`.textlintrc`

```json
{
    "rules": {
        "report-node-types": {
            "nodeTypes": ["BlockQuote"]
        }
    }
}
```

OR

`.textlintrc` as JavaScript config file.

```js
const TextLintNodeType = require("textlint").TextLintNodeType;
module.exports = {
    "rules": {
        "report-node-types": {
            "nodeTypes": [TextLintNodeType.BlockQuote]
        }
    }
}
```

If you want to know all types of TxtNode, please see the document.

- [github.com/textlint/textlint/blob/master/docs/txtnode.md#type](https://github.com/textlint/textlint/blob/master/docs/txtnode.md#type)

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
