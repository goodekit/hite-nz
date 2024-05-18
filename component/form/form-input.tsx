import { HTMLInputTypeAttribute } from 'react'
import { z } from 'zod'
import { Control, FieldPath } from 'react-hook-form'
import { FormControl, FormLabel, FormMessage, FormField, Input } from 'component'
import { schema } from 'lib/utils'

const authSchema = schema('sign-op')

interface FormInputProps {
  control: Control<z.infer<typeof authSchema>>
  name: FieldPath<z.infer<typeof authSchema>>
  label: string
  placeholder: string
  type?: HTMLInputTypeAttribute | undefined
}

const FormInput = ({ control, label, name, placeholder, type }: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>{label}</FormLabel>
          <div className='flex w-full flex-col'>
            <FormControl>
              <Input id={name} placeholder={placeholder} className='input-class' type={type} {...field} />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  )
}

export default FormInput
