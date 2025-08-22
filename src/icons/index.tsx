import { IoMdMenu, IoMdCloseCircleOutline, IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const MailIcon = ({size, className}:iconProps) => {
  return (
    <IoMdMail size={size} color="" className={className} />
  )
}

export const CallIcon = ({size, className}:iconProps) => {
  return (
    <IoCall size={size} color="" className={className} />
  )
}

export const WhatsappIcon = ({size, className}:iconProps) => {
  return (
    <FaWhatsapp size={size} color="" className={className} />
  )
}

export const InstagramIcon = ({size, className}:iconProps) => {
  return (
    <FaInstagram size={size} color="" className={className} />
  )
}

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