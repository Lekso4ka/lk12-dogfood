import {useState, useContext} from "react";
import {Container, Table, ButtonGroup, Button} from "react-bootstrap";
import {Trash3} from "react-bootstrap-icons";
import Ctx from "../ctx";
import {Link} from "react-router-dom";

const Basket = ({}) => {
    const {basket, setBasket, baseData} = useContext(Ctx);
    const ids = basket.map(b => b.id);
    const filteredData = baseData.filter(el => ids.includes(el._id))
    return <Container style={{gridTemplateColumns: "1fr"}}>
        <h1>Корзина</h1>
        <Table striped>
            <tbody>
                {basket.map(el => <tr key={el.id}>
                    {filteredData
                       .filter(f => f._id === el.id)
                       .map(d => <>
                           <td className="align-middle"><img src={d.pictures} alt={d.name} height="38px"/></td>
                           <td className="align-middle">
                               <Link to={`/product/${el.id}`}>{d.name}</Link>
                           </td>
                    </>)}
                    <td className="align-middle">
                        <ButtonGroup>
                            <Button variant="warning">-</Button>
                            <Button variant="light" disabled>{el.cnt}</Button>
                            <Button variant="warning">+</Button>
                        </ButtonGroup>
                    </td>
                    <td className="align-middle">
                        <Trash3/>
                    </td>
                    <td className="align-middle">
                        {el.price} ₽
                    </td>
                    <td style={{verticalAlign: "middle"}}>
                        {el.discount > 0
                            ? <>
                                <span className="text-danger">{Math.ceil(el.price * ((100 - el.discount) / 100)) * el.cnt} ₽</span>
                                <del className="ms-2 small text-secondary d-inline-block">{el.price * el.cnt} ₽</del>
                            </>
                            : <span className="text-danger">{el.price * el.cnt} ₽</span>}
                    </td>
                </tr>)}
            </tbody>
        </Table>
    </Container>
}

export default Basket;

/*
* [
*   {
*       id: product._id
*       cnt: >= 1
*       price: product.price
*       discount: 10
*   }
* ]
*
* */