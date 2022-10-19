export default function (Alpine) {
  Alpine.directive('sticky', (el, { expression, modifiers }) => {
    const targetEl = modifiers[0]
      ? document.querySelector(`.${modifiers[0]}`)
      : el
    const classNames = expression.split(' ')
    const rootMarginAttr =
      el.getAttribute('x-sticky-root') || '-1px 0px 0px 0px'
    const inactiveClasses = el.getAttribute('x-sticky-inactive') || ''
    const inactiveClassesArray = inactiveClasses.split(' ')
    const rootEl = targetEl || el

    function handleClasses(e) {
      inactiveClassesArray.forEach(function (className) {
        el.classList.toggle(className, e.intersectionRatio === 1)
      })

      classNames.forEach(function (className) {
        el.classList.toggle(className, e.intersectionRatio < 1)
      })
    }

    const intersectionObserver = new IntersectionObserver(
      ([e]) => handleClasses(e),
      {
        rootMargin: rootMarginAttr,
        threshold: 1,
      }
    )

    intersectionObserver.observe(rootEl)
  })
}
