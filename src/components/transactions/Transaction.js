// import PropTypes from 'prop-types'
export default function TransactionList(trasactions) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {trasactions.trasactions.map(trasaction => (
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
