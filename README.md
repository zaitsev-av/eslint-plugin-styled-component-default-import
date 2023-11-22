# eslint-plugin-no-default-import

custom eslint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-default-import`:

```sh
npm install eslint-plugin-110515 --save-dev
```

## Usage

Add `110515` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@zaitsev_av/eslint-plugin-no-default-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@zaitsev_av/eslint-plugin-no-default-import/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


