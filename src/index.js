export default function (Alpine) {
  Alpine.directive("sticky", (el, { expression, modifiers }) => {
    let targetEl = modifiers[0]
      ? document.querySelector(`.${modifiers[0]}`)
      : el;
    let classNames = expression.split(" ");
    let rootMarginAttr = el.getAttribute("x-sticky-root") || "-1px 0px 0px 0px";
    let rootMarginThreshold = el.getAttribute("x-sticky-threshold") || [1];
    let rootEl = targetEl || el;

    const observer = new IntersectionObserver(
      ([e]) =>
        classNames.map((className) =>
          el.classList.toggle(className, e.intersectionRatio < 1)
        ),
      {
        rootMargin: rootMarginAttr,
        threshold: rootMarginThreshold,
      }
    );

    observer.observe(rootEl);
  });
}
