export function getPathname() {
  if (typeof window !== `undefined`) return window.location.pathname
  else return ''
}
