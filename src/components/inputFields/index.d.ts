export interface FieldInputPropsInterface {
  type: 'text' | 'email' | 'password'
  control: any
  label: string
  fullWidth: boolean
  isError?: boolean
  isRequired?: boolean
  registerWith: string
  helperText?: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  watch?: UseFormWatch<TFieldValues>
  register: UseFormRegister<TFieldValues>
}
