import React from 'react'
import { string, bool } from 'prop-types'

const Icon = ({mdi, className, children, ...restProps}) =>
  mdi
    ? <i {...restProps} className={`mdi mdi-${children} ${className}`} />
    : <i {...restProps} className={`material-icons ${className}`}>{children}</i>

Icon.propTypes = {
  mdi: bool,
  className: string,
  children: string
}

export default Icon
