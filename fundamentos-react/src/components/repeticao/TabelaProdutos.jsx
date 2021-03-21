import If, { Else } from '../condicional/If';
import produtos from './../../data/produtos';
import './repeticao.css';

export default () => {

    const trTable = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <If condition={produto.id > 1}>
                    <td>{produto.id}</td>
                    <Else>
                        <td>Vai mamar</td>
                    </Else>
                </If>
                <td>{produto.name}</td>
                <td>{produto.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
            </tr>
        );
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID produto</th>
                    <th>Nome do produto</th> 
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {trTable}
            </tbody>
        </table>
    );
}