export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root
  },
  about() {
    return pathKeys.root.concat('about/')
  },
  contact() {
    return pathKeys.root.concat('contact/')
  },
  page404() {
    return pathKeys.root.concat('404/')
  }
}