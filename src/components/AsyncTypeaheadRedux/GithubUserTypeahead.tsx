import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field } from 'react-final-form'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import useKeyword from './useKeyword'
import { compose, propOr, pathOr } from 'ramda'
import arrify from 'arrify'

import 'react-bootstrap-typeahead/css/Typeahead.css'
import { searchGithubUsers } from './actions'

// @ts-ignore
const AdaptedTypeahead = ({ input, render, meta, ...rest }) => (
  <AsyncTypeahead {...input} {...rest} selected={input.value} id={`${Math.random() * 1000}`} />
)

// @ts-ignore
export default function GithubUserTypeahead({ name, ...props }) {
  const { keyword, updateKeyword } = useKeyword(name)

  const dispatch = useDispatch()
  // @ts-ignore
  const getOptions = useCallback(pathOr([], [keyword, 'value']), [keyword])
  // @ts-ignore
  const isLoading = useCallback(pathOr(false, [keyword, 'loading']), [keyword])
  // @ts-ignore
  const handleOnSearch = useCallback(compose(dispatch, searchGithubUsers), [dispatch])

  // @ts-ignore
  const options = useSelector(getOptions)
  // @ts-ignore
  const loading = useSelector(isLoading)

  return (
    <Field
      name={name}
      component={AdaptedTypeahead}
      // @ts-ignore
      parse={propOr(null, 0)}
      format={arrify}
      placeholder='Write a github username'
      labelKey='login'
      options={options}
      onSearch={handleOnSearch}
      isLoading={loading}
      onInputChange={updateKeyword}
    />
  )
}
