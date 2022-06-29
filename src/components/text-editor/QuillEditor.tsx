import { useEffect, useRef, useState } from 'react'
import Quill from 'quill'

const theme = 'snow'

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],

    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['link', 'image', 'video'],
    [{ color: [] }, { background: [] }],

    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
}

const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'list',
  'indent',
  'size',
  'header',
  'link',
  'image',
  'video',
  'color',
  'background',
  'clean',
]

// eslint-disable-next-line
function assign(target: any, ...rest: any[]) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object.')
  }

  const to = Object(target)

  for (let index = 1; index < rest.length; index++) {
    const nextSource = rest[index]

    if (nextSource !== null && nextSource !== undefined) {
      for (const nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey]
        }
      }
    }
  }

  return to
}

export interface useQuillProps {
  theme?: string
  // eslint-disable-next-line
  modules?: any
  // eslint-disable-next-line
  formats?: any
  placeholder?: string
}

// eslint-disable-next-line
export default function useQuill(options: useQuillProps): any {
  const quillRef = useRef()

  const [isLoaded, setIsLoaded] = useState(false)
  const [obj, setObj] = useState({
    Quill: undefined,
    quillRef,
    quill: undefined,
    editorRef: quillRef,
    editor: undefined,
  })

  function componentDidUpdate() {
    if (!obj.Quill) {
      // eslint-disable-next-line
      // @ts-ignore
      obj.Quill = Quill
    }

    if (obj.Quill && !obj.quill && quillRef && quillRef.current && isLoaded) {
      const opts = assign(options, {
        modules: assign(modules, options.modules),
        formats: options.formats || formats,
        theme: options.theme || theme,
        placeholder: options.placeholder,
      })
      // eslint-disable-next-line
      // @ts-ignore
      const quill = new obj.Quill(quillRef.current, opts)
      setObj(assign(assign({}, obj), { quill, editor: quill }))
    }

    setIsLoaded(true)
  }

  // eslint-disable-next-line
  useEffect(componentDidUpdate, [obj.Quill])

  return obj
}
