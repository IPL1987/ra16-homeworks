export default function Month(props) {
  console.log('Month', props);

  return (
    <div>
      <h2>Month</h2>
      <table>
        <tbody>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
          {props.list.map(item => (
            <tr key={Math.random()}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};