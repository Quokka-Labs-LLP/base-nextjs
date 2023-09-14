export interface InputCheckboxProps {
  label: string
  isRequired?: boolean
  registerWith: string
  control: Control<TFieldValues, TContext>
  error?: string | FieldError | undefined | Merge<FieldError, FieldErrorsImpl<any>>
}
