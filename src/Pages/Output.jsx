import React from 'react'
import { useLocation } from 'react-router-dom'

function Output() {
  const location = useLocation()
  const searchData = location.state || {}; // Default to empty object if no state is passed
  
  
  return (
    <h1>Hello</h1>
  )
}

export default Output
