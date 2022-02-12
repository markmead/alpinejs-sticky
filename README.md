# Apline JS Sticky

Alpine JS plugin `x-sticky` allows you to toggle class names on elements when an element is stuck in the viewport 🕸

## Example 👀

### JSON

```html
<div class="h-[3000px]" x-data>
  <div class="px-4 py-12 sm:px-6 lg:px-8 bg-gray-100">
    <h1 class="text-xl font-medium">Hello World! 👋</h1>
  </div>

  <div
    class="flex justify-between bg-gray-200 py-4 px-4 sm:px-6 lg:px-8 sticky top-0"
    x-sticky="bg-blue-600 text-white"
    x-sticky-parent
  >
    <p class="text-sm">I'm Sticky!</p>

    <p class="hidden" x-sticky.parent="!block">
      Hello! I appear when my parent is sticky!
    </p>
  </div>
</div>
```

`x-sticky="bg-blue-600 text-white"`

This will add `bg-blue-600 text-white` to that element when it is stuck in the viewport.

`x-sticky.parent="!block"`

This will add `!block` to that element when the parent element with `x-sticky-parent` is stuck in the viewport.

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
