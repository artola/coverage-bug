# Coverage Bug

Possible bug for coverage collection when used with `loose` mode for `babel`.

## Bug Report

See: https://github.com/kulshekhar/ts-jest/issues/2133

## To Reproduce

In `babel.config.js` change the option `loose` and observe the branch coverage for each file:

- for `true`

```txt
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |       50 |     100 |     100 |
 js        |     100 |       50 |     100 |     100 |
  trial.js |     100 |       50 |     100 |     100 | 1
 ts        |     100 |       50 |     100 |     100 |
  trial.ts |     100 |       50 |     100 |     100 | 1
-----------|---------|----------|---------|---------|-------------------
```

- for `false`

```txt
-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |    66.67 |     100 |     100 |
 js        |     100 |       50 |     100 |     100 |
  trial.js |     100 |       50 |     100 |     100 | 1
 ts        |     100 |       75 |     100 |     100 |
  trial.ts |     100 |       75 |     100 |     100 | 1
-----------|---------|----------|---------|---------|-------------------
```

**Note**: coverage reports (`lcov`, `clover`) located in the folder `coverage`.
