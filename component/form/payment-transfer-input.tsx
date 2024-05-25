import React from 'react'
import { FormField, FormItem, FormLabel, FormDescription, FormControl, Textarea, FormMessage } from 'component'

interface PaymentTransferInputProps {
  form: any
  name: string
  description: string
  placeholder?: string
  transferLabel: string
}

const PaymentTransferInput = ({ form, name, description, placeholder, transferLabel }: PaymentTransferInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='border-t border-gray-200'>
          <div className='payment-transfer_form-item pb-6 pt-5'>
            <div className='payment-transfer_form-content'>
              <FormLabel className='text-14 font-medium text-gray-700'>{transferLabel}</FormLabel>
              <FormDescription className='text-12 font-normal text-gray-600'>{description}</FormDescription>
            </div>
            <div className='flex w-full flex-col'>
              <FormControl>
                <Textarea placeholder={placeholder} className='input-class' {...field} />
              </FormControl>
              <FormMessage className='text-12 text-red-500' />
            </div>
          </div>
        </FormItem>
      )}
    />
  )
}

export default PaymentTransferInput
