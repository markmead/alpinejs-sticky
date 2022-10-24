function toggleClasses(intersectionEntry, inactiveClasses, activeClasses, el) {
  const firstEntry = intersectionEntry[0]

  if (inactiveClasses) {
    inactiveClasses.forEach(function (className) {
      el.classList.toggle(className, firstEntry.intersectionRatio === 1)
    })
  }

  activeClasses.forEach(function (className) {
    el.classList.toggle(className, firstEntry.intersectionRatio < 1)
  })
}

export function useObserver(
  rootMargin,
  inactiveClasses,
  activeClasses,
  rootEl,
  el
) {
  const intersectionObserver = new IntersectionObserver(
    (intersectionEntry) =>
      toggleClasses(intersectionEntry, inactiveClasses, activeClasses, el),
    {
      rootMargin,
      threshold: 1,
    }
  )

  intersectionObserver.observe(rootEl)
}
