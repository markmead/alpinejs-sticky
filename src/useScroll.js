export function useScroll(inactiveClasses, activeClasses, rootEl, el) {
  if (inactiveClasses) {
    inactiveClasses.forEach(function (className) {
      el.classList.add(className)
    })
  }

  window.addEventListener('scroll', function () {
    if (inactiveClasses) {
      inactiveClasses.forEach(function (className) {
        el.classList.toggle(className, window.scrollY === 0)
      })
    }

    activeClasses.forEach(function (className) {
      el.classList.toggle(
        className,
        rootEl.getBoundingClientRect().top === 0 && window.scrollY > 0
      )
    })
  })
}
