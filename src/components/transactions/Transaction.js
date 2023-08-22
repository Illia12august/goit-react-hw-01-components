// import PropTypes from 'prop-types'
import { Table, TableHead, TableEl } from './transactions.styled'
export default function TransactionList(transactions) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableEl>type</TableEl>
          <TableEl>amount</TableEl>
          <TableEl>currency</TableEl>
        </tr>
      </TableHead>
      <tbody>
        {transactions.transactions.map(transaction => (
          <tr key={transaction.id}>
            <TableEl>{transaction.type}</TableEl>
            <TableEl>{transaction.amount}</TableEl>
            <TableEl>{transaction.currency}</TableEl>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
