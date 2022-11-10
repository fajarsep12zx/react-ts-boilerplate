import React from 'react'
import PropTypes from 'prop-types'
import { Box, InputBase } from '@material-ui/core'

import useStyle from './style'

const CustomField = ({
  error, name, onChange, placeholder, touch, type, value,
}) => {
  const classes = useStyle()
  let isError = false

  if (error && touch) {
    isError = true
  }
  return (
    <Box>
      <Box width={1}>
        <InputBase
          error={isError}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          className={classes.root}
        />
      </Box>
      <Box width={1} textAlign="left">
        {error && touch && <span>{error}</span>}
      </Box>
    </Box>

  )
}

CustomField.defaultProps = {
  error: '',
  placeholder: '',
  touch: false,
}

CustomField.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  touch: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default CustomField
