# Apline JS Sticky

Toggle CSS class names when an element becomes sticky to the DOM 🐙

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-sticky@1.x.x/dist/sticky.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
npm i -D alpinejs-sticky

yarn add -D alpinejs-sticky
```

```js
import Alpine from 'alpinejs'
import sticky from 'alpinejs-sticky'

Alpine.plugin(sticky)

Alpine.start()
```

## Example

```html
<div x-data>
  <div class="sticky top-0 sticky-root" x-sticky="!bg-red-500">
    <p class="hidden" x-sticky.sticky-root="!block">Hello World!</p>
  </div>

  <p class="hidden" x-sticky.sticky-root="!block">Hello World!</p>
</div>
```

`x-sticky="!bg-red-500"`

This will add `!bg-red-500` to the element when it is sticky to the DOM.

`x-sticky.sticky-root="!block"`

This will add `!block` to the element when the `sticky-root` element is sticky to the DOM.

_This example uses Tailwind CSS classes, but any CSS class names will work._

## Options

There are two options you can use to manipulate how the `x-sticky` instance works.

- `x-sticky-root` (`-1px 0px 0px 0px`)
- `x-sticky-threshold` (`[1]`)

[MDN IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-sticky)
![](https://img.shields.io/npm/v/alpinejs-sticky)
![](https://img.shields.io/npm/dt/alpinejs-sticky)
![](https://img.shields.io/github/license/markmead/alpinejs-sticky)
