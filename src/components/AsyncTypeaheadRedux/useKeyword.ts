import { useForm, useField } from 'react-final-form'
import { propOr } from 'ramda'

export default function useKeyword(name: string) {
  const {
    mutators: { setFieldData },
  } = useForm()
  const { meta } = useField(name, { subscription: { data: true } })

  return {
    keyword: propOr(null, 'keyword', meta.data),
    updateKeyword: (keyword: string) => setFieldData(name, { keyword }),
  }
}
