import { DoughnutChart } from 'component'
import { AnimateCounter } from 'component/animate'

const BalanceBox = ({ account = [], bank, totalCurrentBalance }: BalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <DoughnutChart account={account} />
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'> Bank Accounts: {bank}</h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Current Balance: </p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimateCounter amount={totalCurrentBalance} />
          </div>
        </div>
        <p className='total-balance-subtext'>Total balance across all accounts</p>
      </div>
    </section>
  )
}

export default BalanceBox
