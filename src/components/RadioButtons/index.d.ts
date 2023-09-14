export interface RadioButtonsInterface {
  label: string
  registerWith: string
  isRequired?: boolean
  error?: string | FieldError | undefined | Merge<FieldError, FieldErrorsImpl<any>>
  children: JSX.Element[]
  control: Control<TFieldValues, TContext>
}
