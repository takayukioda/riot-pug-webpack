Riot with Pug using Webpack
=====

Notes
-----

### Need period after `script` tag

Or else, pug can't understand it's a different language

```pug
component
  h1 { state.name }

  script.
    export default {
      state: {
        name: 'John Doe',
      },
    };
```

### Backquote (`` ` ``) for event handler

To attach function to template like `onclick`, you have to have backquote like following:

```pug
component
  button(onclick=`{ clickHandler }`) Click me
```

Reference:
-----

- Riotjs' official webpack integration sample
  - https://github.com/riot/examples/blob/gh-pages/webpack/webpack.config.js
