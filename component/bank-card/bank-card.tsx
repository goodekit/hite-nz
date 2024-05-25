import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import { formatCurrency } from 'lib/utils'
import { ASSET } from 'config'
import { Copy } from 'component'

const BankCard = ({ account, username, showBalance = true }: BankCardProps) => {
  return (
    <div className='flex flex-col'>
      <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className='bank-card'>
        <div className='bank-card_content'>
          <div className=''>
            <h1 className='text-16 font-semibold text-white'>{account?.name || username}</h1>
            <p className='font-oxygen font-black text-white'>{formatCurrency(account?.currentBalance)}</p>
          </div>

          <article className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <h1 className='text-12 font-semibold text-white'>{username}</h1>
              <h2 className='text-12 font-semibold text-white'>●●/●●</h2>
            </div>
            <p className='text-14 font-semibold tracking[1.1px] text-white'>
              ●●●● ●●●● ●●●● <span className='text-16'>{account?.mask}</span>
            </p>
          </article>
        </div>
        <div className='bank-card_icon'>
          <Image src={ASSET.PAY_PASS} width={20} height={24} alt='pay' />
          <Image src={ASSET.MASTERCARD} width={45} height={32} alt='mastercard' className='ml-5' />
        </div>
        <Image src={ASSET.LINES} width={316} height={190} alt='lines' className='absolute top-0 left-0' />
      </Link>

      {showBalance && <Copy title={account?.shareableId} />}
    </div>
  )
}

export default BankCard
