import React, { type HtmlHTMLAttributes } from 'react'

const Button: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className="page-title-action" />
}

export default Button
