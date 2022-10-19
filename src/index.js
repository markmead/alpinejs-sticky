import { useScroll } from './useScroll'
import { toggleClasses } from './useObserver'

export default function (Alpine) {
  Alpine.directive('sticky', (el, { expression, modifiers }) => {
    const waitModifier = modifiers.find(
      (alpineModifier) => alpineModifier === 'wait'
    )
    const elModifier = modifiers.find(
      (alpineModifier) => alpineModifier !== 'wait'
    )

    const targetEl = elModifier ? document.querySelector(`.${elModifier}`) : el
    const rootEl = targetEl || el
    const rootMarginAttr =
      el.getAttribute('x-sticky-root') || '-1px 0px 0px 0px'
    const activeClasses = expression.split(' ')
    let inactiveClasses = el.getAttribute('x-sticky-inactive') || ''
    inactiveClasses = inactiveClasses ? inactiveClasses.split(' ') : false

    const intersectionObserver = new IntersectionObserver(
      (intersectionEntry) =>
        toggleClasses(intersectionEntry, inactiveClasses, activeClasses, el),
      {
        rootMargin: rootMarginAttr,
        threshold: 1,
      }
    )

    waitModifier
      ? useScroll(inactiveClasses, activeClasses, rootEl, el)
      : intersectionObserver.observe(rootEl)
  })
}
