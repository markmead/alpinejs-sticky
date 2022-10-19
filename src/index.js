import { useScroll } from './useScroll'
import { useObserver } from './useObserver'

export default function (Alpine) {
  Alpine.directive('sticky', (el, { expression, modifiers }) => {
    const waitModifier = modifiers.find(
      (alpineModifier) => alpineModifier === 'wait'
    )
    const elModifier = modifiers.find(
      (alpineModifier) => alpineModifier !== 'wait'
    )
    const rootEl = elModifier ? document.querySelector(`.${elModifier}`) : el
    const rootMargin = el.getAttribute('x-sticky-root') || '-1px 0px 0px 0px'
    const activeClasses = expression.split(' ')
    let inactiveClasses = el.getAttribute('x-sticky-inactive') || ''
    inactiveClasses = inactiveClasses ? inactiveClasses.split(' ') : false

    waitModifier
      ? useScroll(inactiveClasses, activeClasses, rootEl, el)
      : useObserver(rootMargin, inactiveClasses, activeClasses, rootEl, el)
  })
}
