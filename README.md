# Webpack Boilertemplate

Basic template for an application.

## Instructions

Features guide.

### Image optimization for browsers and devices

```
<picture>
  <source type="image/webp" srcset="./image.webp">
  <source type="image/jpeg" srcset="./image.jpg">
  <img src="./image.jpg" alt="Placeholder">
</picture>
```

A **picture** tag lets you choose the image suitable for the browser from some available options. It's used as a container for several tags **source**, in the parameters of which you should pass *condition* and *path* to the image. As a condition can be used:

* type
* media
* sizes

The first **source** tag, that satisfied the condition, will pass its parameters to **img** tag. In case if [browser does not support picture tag](https://caniuse.com/#search=picture), **img** will be rendered with initial parameters, which guarantees support for outdated browsers.

[Live example on codepen.io](https://codepen.io/mikhailnetkachev-halolab/pen/NWPqgWL).
