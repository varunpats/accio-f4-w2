import './table.css';

const Table = props => {
    return <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Image</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Total Volume</th>
            </tr>
        </tbody>
        <tbody>
            {props.data.map((item, index) => {
                return (
                    <tr key={item.id}>
                        <td >{item.name}</td>
                        <td>{item.id}</td>
                        <td>
                            <img src={item.image} width="50px" alt={item.name}/>
                        </td>
                        <td>{item.symbol}</td>
                        <td>{item.current_price}</td>
                        <td>{item.total_volume}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
}

export default Table;