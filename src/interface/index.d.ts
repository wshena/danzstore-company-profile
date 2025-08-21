interface linkProps {
  id: number | string,
  label: string,
  link: string
}

interface navLinkProps {
  id: number | string,
  label: string,
  link: string,
  dropDownLink?: linkProps[]
}

interface iconProps {
  size: number,
  className: string
}