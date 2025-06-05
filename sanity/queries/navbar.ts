export const navbarQuery = `*[_type == "navbar" && language == $language][0] {
  navLinks[] {
    href,
    label
  }
}` 