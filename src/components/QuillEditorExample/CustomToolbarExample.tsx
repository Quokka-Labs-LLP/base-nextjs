import React from 'react'

import Card from '../Card'
import { useQuill } from '../index'

export default function CustomToolbarExample(): JSX.Element {
  const { quillRef } = useQuill({
    modules: {
      toolbar: '#toolbar',
    },
    formats: ['size', 'bold', 'script'], // Important
  })

  return (
    <Card label='Custom Toolbar Example'>
      <>
        <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
        <div id='toolbar'>
          <select className='ql-size'>
            <option value='small' />
            <option selected />
            <option value='large' />
            <option value='huge' />
          </select>
          <button className='ql-bold' />
          <button className='ql-script' value='sub' />
          <button className='ql-script' value='super' />
        </div>
        <div id='editor' />
      </>
    </Card>
  )
}
