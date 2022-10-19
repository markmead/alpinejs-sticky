# Alpine JS Sticky

Toggle CSS class names when an element becomes sticky to the DOM 🐙

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-sticky@latest/dist/sticky.min.js"
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
  <div class="sticky top-0 sticky-root" x-sticky="bg-red-500">
    <p class="hidden" x-sticky.sticky-root="block">Hello World!</p>
  </div>

  <p class="hidden" x-sticky.sticky-root="block">Hello World!</p>
</div>
```

`x-sticky="bg-red-500"`

This will add `bg-red-500` to the element when it is sticky to the DOM.

`x-sticky.sticky-root="block"`

This will add `block` to the element when the `sticky-root` element is sticky to
the DOM.

At times you might need to apply the `! important` modifier to your CSS.

_This example uses Tailwind CSS classes, but any CSS class names will work._

## Options

**`x-sticky-inactive`**

This allows you to pass classes that apply to the element when it's not stuck.
These will be toggled alongside the active classes.

Using this means you do not need an `! important` modifier with your CSS.

**`x-sticky-root`**

By default this is `-1px 0px 0px 0px`.

[MDN IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

I have removed the `x-sticky-threshold` option as I found it unnecessary through
my uses.

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-sticky)
![](https://img.shields.io/npm/v/alpinejs-sticky)
![](https://img.shields.io/npm/dt/alpinejs-sticky)
![](https://img.shields.io/github/license/markmead/alpinejs-sticky)
