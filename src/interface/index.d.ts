interface linkProps {
  id: number | string,
  label: string,
  link: string
  icon?: React.ReactNode
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

interface packageProps {
  id: number | string,
  icon: string,
  label: string,
  desc: string,
  price: string,
  extention: string,
  feature: string[]
}

interface teamCardProps {
  id: number | string,
  label: string,
  image: string
}