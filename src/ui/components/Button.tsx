import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react'

const Button: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className="page-title-action" />
}

export default Button