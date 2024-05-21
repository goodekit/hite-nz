'use client'
import CountUp from 'react-countup'
import { CURRENCY } from 'constant'

const AnimateCounter = ({ amount }: { amount: number }) => {
  const setting = {
    decimals: 2,
    decimal: '.',
    prefix: CURRENCY.NZD,
    end: amount,
  }

  return (
    <div className='w-full'>
      <CountUp {...setting} />
    </div>
  )
}

export default AnimateCounter
