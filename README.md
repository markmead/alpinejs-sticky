# Apline JS Sticky

Alpine JS plugin `x-sticky` allows you to toggle class names on elements when an element is stuck in the viewport 🕸

## Example 👀

```html
<div class="h-[3000px] p-8 space-y-8" x-data>
  <h1 class="text-3xl">👋</h1>

  <div
    class="flex justify-between bg-white p-4 border-2 border-blue-500 sticky top-0 sticky-root"
    x-sticky="!border-red-500 !bg-red-50"
  >
    <p>🕸🕸🕸</p>

    <p class="hidden" x-sticky.sticky-root="!block">🕸🕸</p>
  </div>

  <div class="py-32">
    <p class="hidden" x-sticky.sticky-root="!block">🕸</p>
  </div>
</div>
```

`x-sticky="!border-red-500 !bg-red-50"`

This will add `!border-red-500 !bg-red-50` to that element when it is stuck in the viewport.

`x-sticky.sticky-root="!block"`

This will add `!block` to that element when the element with the class `sticky-root` is stuck in the viewport.

_Class names must be lowercase_

## Options

There are two options you can pass.

- `x-sticky-root` (`-1px 0px 0px 0px`)
- `x-sticky-threshold` (`[1]`)

99% of the time the defaults will be fine, however you may want to change this.

[MDN IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script src="https://unpkg.com/alpinejs-sticky@1.x.x/dist/sticky.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-sticky

yarn add -D alpinejs-sticky
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import sticky from "alpinejs-sticky";

Alpine.plugin(sticky);

window.Alpine = Alpine;

Alpine.start();
```

### Stats 📊

Here's some stats about the Alpine JS Sticky package! As you can see, it's tiny 🤏

![](https://img.shields.io/bundlephobia/min/alpinejs-sticky)
![](https://img.shields.io/npm/v/alpinejs-sticky)
![](https://img.shields.io/npm/dt/alpinejs-sticky)
![](https://img.shields.io/github/license/markmead/alpinejs-sticky)
