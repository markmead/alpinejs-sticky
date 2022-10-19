export function toggleClasses(
  intersectionEntry,
  inactiveClasses,
  activeClasses,
  el
) {
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
