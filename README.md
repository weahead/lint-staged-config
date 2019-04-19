# @weahead/lint-staged-config

[We aheads](https://www.weahead.se/) configuration for lint-staged.

## Install

```
npm i -DE lint-staged @weahead/lint-staged-config
```

Create a `lint-staged.config.js` file in the root of your project with:

```
module.exports = require('@weahead/lint-staged-config');
```

Add a run target to `package.json` named `lint-staged` with the desired command:

```
{
    ...
    "scripts": {
        ...
        "lint-staged": "<your command goes here>",
        ...
    }
    ...
}
```

## License

[X11](LICENSE)
