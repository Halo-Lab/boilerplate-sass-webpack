# Webpack Boilerplate

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

<Picture> tag lets browser choose the image that suits him better. It's used as a container for several <source> tags. You should pass *condition* and *path to the image* as a parameter to the <source> tag. As a condition you can use:

* type
* media
* sizes

The first <source> tag, that satisfied the condition, will pass its parameters to <img> tag. In case if [browser does not support picture tag](https://caniuse.com/#search=picture), <img> will be rendered with initial parameters, which guarantees support for outdated browsers.

[Live example on codepen.io](https://codepen.io/mikhailnetkachev-halolab/pen/NWPqgWL).
