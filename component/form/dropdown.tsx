'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from 'component/ui'
import { formUrlQuery, formatCurrency } from 'lib/utils'
import { ASSET } from 'config'

export const BankDropdown = ({ accounts = [], setValue, otherStyles }: BankDropdownProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selected, setSeclected] = useState(accounts[0])

  const handleBankChange = (id: string) => {
    const account = accounts.find((account) => account.appwriteItemId === id)!

    setSeclected(account)
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'id',
      value: id,
    })
    router.push(newUrl, { scroll: false })

    if (setValue) {
      setValue('senderBank', id)
    }
  }

  return (
    <Select defaultValue={selected.id} onValueChange={(value: string) => handleBankChange(value)}>
      <SelectTrigger className={`flex bg-white w-full gap-3 md:w-[300px] ${otherStyles}`}>
        <Image src={ASSET.CREDIT_CARD} width={20} height={20} alt='account' />
        <p className='line-clamp-1 w-full text-left'>{selected.name}</p>
      </SelectTrigger>
      <SelectContent className={`w-full bg-white md:w-[300px] ${otherStyles}`} align='end'>
        <SelectGroup>
          <SelectLabel className='py-2 font-normal text-gray-500'>Select a bank to display</SelectLabel>
          {accounts.map((account: Account) => (
            <SelectItem key={account.id} value={account.appwriteItemId} className='cursor-pointer border-t'>
              <div className='flex flex-col '>
                <p className='text-16 font-medium'>{account.name}</p>
                <p className='text-14 font-medium text-blue-600'>{formatCurrency(account.currentBalance)}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
