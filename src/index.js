export default function (Alpine) {
  Alpine.directive("sticky", (el, { expression, modifiers }) => {
    let parentEl = modifiers.includes("parent")
      ? el.closest("[x-sticky-parent]")
      : null;
    let classNames = expression.split(" ");
    let rootMarginAttr = el.getAttribute("x-sticky-root") || "-1px 0px 0px 0px";
    let rootMarginThreshold = el.getAttribute("x-sticky-threshold") || [1];
    let rootEl = parentEl ? parentEl : el;

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
