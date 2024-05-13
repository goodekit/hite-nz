import { BalanceBox, HeaderBox } from 'component'

const Home = () => {
  const user = {
    firstname: 'Joe',
    lastname: 'Doe',
    email: 'john.doe@example.com',
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='Welcome' user={user.firstname || 'Guest'} subtext='this is a description' />
          <BalanceBox account={[]} bank={1} totalCurrentBalance={2356} />
        </header>
      </div>
    </section>
  )
}

export default Home
