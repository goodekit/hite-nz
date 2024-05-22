import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from 'component/ui/table'
import { KEY } from 'constant'
import { formatCurrency, getTransactionStatus, removeSpecialCharacters } from 'lib/utils'

const TableTransaction = ({ transaction }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className='bg-[#F9FAFB]'>
        <TableRow>
          <TableHead className='px-2'>Transaction</TableHead>
          <TableHead className='px-2'>Amount</TableHead>
          <TableHead className='px-2'>Status</TableHead>
          <TableHead className='px-2'>Date</TableHead>
          <TableHead className='px-2 max-md:hidden'>Channel</TableHead>
          <TableHead className='px-2 max-md:hidden'>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transaction.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date))
          const amount = formatCurrency(t.amount)

          const isDebit = t.type === KEY.DEBIT
          const isCredit = t.type === KEY.CREDIT

          return (
            <TableRow key={t.id}>
              <TableCell>
                <div className=''>
                  <h1>{removeSpecialCharacters(t.name)}</h1>
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TableTransaction
