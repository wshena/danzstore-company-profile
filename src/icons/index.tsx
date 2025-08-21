import { IoMdMenu, IoMdCloseCircleOutline } from "react-icons/io";

export const MenuIcon = ({size, className}:iconProps) => {
  return (
    <IoMdMenu size={size} color="" className={className} />
  )
}

export const CloseIcon = ({size, className}:iconProps) => {
  return (
    <IoMdCloseCircleOutline size={size} color="" className={className} />
  )
}