import { HeaderBox, PaymentTransferForm } from 'component'
import { getLoggedInUser, getAccounts } from 'lib/actions'

const Transfer = async () => {
  const loggedInUser = await getLoggedInUser()
  const accounts = await getAccounts({ userId: loggedInUser.$id })

  if (!accounts) return

  const accountsData = accounts?.data

  return (
    <section className='payment-transfer'>
      <HeaderBox title='Payment Transfer' subtext='Please provide any specific details for the payment transfer.' />

      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer
