export interface SelectInputInterface {
  label: string
  array: any[]
  isRequired?: boolean
  registerWith: string
  value: string
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  register: UseFormRegister<TFieldValues>
  open?: boolean
}
