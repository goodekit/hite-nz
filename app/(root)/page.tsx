import { BalanceBox, HeaderBox, RightSidebar } from 'component'

const Home = () => {
  const user = {
    $id: '1',
    firstname: 'Joe',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    userId: 'asdad21',
    dwollaCustomerUrl: 'asdadad2d1',
    dwollaCustomerId: 'asdad21',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    dateOfBirth: '01/01/1990',
    ssn: '123-45-6789',
  }

  const _account = [
    {
      $id: '1',
      accountId: '**** **** **** 1234',
      bankId: 'boa',
      accessToken: 'asdadad2d1',
      fundingSourceUrl: 'USD',
      userId: 'asdad21',
      sharableId: 'asda-1d1-123123',
    },
  ]

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='Welcome' user={user.firstname || 'Guest'} subtext='this is a description' />
          <BalanceBox account={[]} bank={1} totalCurrentBalance={2356} />
        </header>
      </div>
      <RightSidebar user={user} bank={_account} transaction={[]} />
    </section>
  )
}

export default Home
