import React, { PropTypes } from 'react'

function IconRelation({ width = 18, height = 18 }) {
  return (
    <svg viewBox="0 0 1024 1024" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path d="M853.333333 938.666667c47.36 0 85.333333-37.973333 85.333334-85.333334v-85.333333h-85.333334v85.333333h-85.333333v85.333334h85.333333m-170.666666 0v-85.333334h-128v85.333334h128m-213.333334 0v-85.333334H384v-85.333333H298.666667v85.333333c0 47.36 37.973333 85.333333 85.333333 85.333334h85.333333m469.333334-256v-128h-85.333334v128h85.333334M384 682.666667V384h298.666667V128c0-47.36-37.973333-85.333333-85.333334-85.333333H128c-47.36 0-85.333333 37.973333-85.333333 85.333333v469.333333c0 47.36 37.973333 85.333333 85.333333 85.333334h256m-85.333333-85.333334H128V128h469.333333v170.666667H384c-47.36 0-85.333333 37.973333-85.333333 85.333333v213.333333m640-128V384c0-47.36-37.973333-85.333333-85.333334-85.333333h-85.333333v85.333333h85.333333v85.333333h85.333334z" fill="#00C1DE"></path>
    </svg>
  )
}

IconRelation.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default IconRelation