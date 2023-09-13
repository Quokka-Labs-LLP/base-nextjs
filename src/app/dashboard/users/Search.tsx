'use client'

import { useDebounce } from '@/hooks'
import React, { useEffect, useState } from 'react'

import SearchWithButton from '@/components/inputFields/SearchFieldWithButton'
import SearchWithDebounce, {
  SearchWithDebounceProps,
} from '@/components/inputFields/SearchWithDebounce'

interface SearchProps extends Omit<SearchWithDebounceProps, 'value' | 'handleInputChange'> {}

const Search = (props: SearchProps) => {
  const { handleInputChange, value, debouncedValue } = useDebounce()
  const { label, size } = props
  const apiCallFunction = (params: any) => {
    console.log('You searched successfully')
  }

  useEffect(() => {
    if (debouncedValue) {
      apiCallFunction('')
    }
  }, [debouncedValue])

  return (
    <SearchWithDebounce
      label={label}
      size={size}
      handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e)
      }}
      value={value}
    />
  )
}

const SearchWithBtn = (props: SearchProps) => {
  const [value, setValue] = useState('')
  const { label, size } = props
  const apiCallFunction = (params: any) => {
    console.log('You searched successfully')
  }

  return (
    <SearchWithButton
      label={label}
      size={size}
      handleInputChange={(e) => setValue(e.target.value)}
      value={value}
      sx={{
        '.MuiInputBase-root': {
          paddingRight: 0,
        },
      }}
    />
  )
}

export { SearchWithBtn, Search }
