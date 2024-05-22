import React from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'component/ui/tabs'
import { TabItem } from './tab-item'
import { Info } from './info'
import TableTransaction from './table'

const RecentTransaction = ({ account, transaction = [], appwriteItemId, page = 1 }: RecentTransactionProps) => {
  return (
    <section className='recent-transactions'>
      <header className='flex items-center justify-between'>
        <h2 className='recent-transactions-label'>
          <Link href={`/transaction-history/?id=${appwriteItemId}`} className='view-all-btn'>
            View all
          </Link>
        </h2>
      </header>
      <Tabs defaultValue={appwriteItemId} className='w-full'>
        <TabsList className='recent-transactions-tablist'>
          {account.map((a: Account) => (
            <TabsTrigger key={a.id} value={a.appwriteItemId}>
              <TabItem key={a.id} account={a} appwriteItemId={appwriteItemId} />
            </TabsTrigger>
          ))}
        </TabsList>

        {account.map((a: Account) => (
          <TabsContent value={a.appwriteItemId} key={a.id} className='space-y-4'>
            <Info account={a} appwriteItemId={appwriteItemId} type='full' />
            <TableTransaction transaction={transaction} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

export default RecentTransaction
