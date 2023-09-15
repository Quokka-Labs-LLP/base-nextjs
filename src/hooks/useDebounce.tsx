import React, { useEffect, useState } from 'react'

const useDebounce = () => {
  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedValue(value)
    }, 500)
    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {
    handleInputChange,
    debouncedValue,
    value,
  }
}

export default useDebounce
