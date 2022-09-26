import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Card from '../Card'

// eslint-disable-next-line
const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    // eslint-disable-next-line
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })
        
        return {
          values,
          errors: {},
        }
        // eslint-disable-next-line
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            // eslint-disable-next-line
            (allErrors: { [key: string]: { type: null | 'validation'; message: string } }, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        }
      }
    },
    [validationSchema],
  )

const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
})

export default function CustomHookResolverExample(): JSX.Element {
  const resolver = useYupValidationResolver(validationSchema)
  const { handleSubmit, register } = useForm({ resolver })

  return (
    <Card label='Custom Hook Resolver'>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('firstName')} />
        <input {...register('lastName')} />
        <input type='submit' />
      </form>
    </Card>
  )
}
