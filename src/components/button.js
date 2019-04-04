import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Button = ({
  children,
  screaming = false,
  action = false,
  rounded = false,
  expanded = false,
  hollow = false,
  disabled = false,
  oval = false,
  glow = false,
  className,
  ...props
}) => {
  return (
    <button
      className={cx(
        'button',
        {
          disabled,
          screaming,
          action,
          rounded,
          expanded,
          hollow,
          oval,
          glow
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  screaming: PropTypes.bool,
  action: PropTypes.bool,
  rounded: PropTypes.bool,
  expanded: PropTypes.bool,
  hollow: PropTypes.bool,
  disabled: PropTypes.bool,
  oval: PropTypes.bool,
  glow: PropTypes.bool,
  className: PropTypes.string
}

export default Button
