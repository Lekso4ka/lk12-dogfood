/*
    В БД хранятся данные определенных типов
    Необязательные параметры помечены вопросительным знаком
    {
        name: string
        pictures: string (ссылка)
        price: number
        stock?: number (количество на складе)
        tags?: array of string (пометки новинок, скидок, популярных товаров)
        description?: string => "Скоро здесь будет текст..."
        discount?: number => 0
        wight?: string (вес - не 100, а "100 г")
    }
*/

import {useState} from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
const AddProduct = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("https://beolin.club/uploads/posts/2022-07/1657851760_12-beolin-club-p-risunok-kostochki-karandashom-krasivo-19.png"); // pictures
    const [price, setPrice] = useState(999);
    const [cnt, setCnt] = useState(20); // stock
    const [description, setDescription] = useState("Скоро здесь будет текст...");
    const [discount, setDiscount] = useState(0);
    const [wight, setWight] = useState("0 г");
    const [tagWord, setTagWord] = useState(""); // слово для массива с тегами
    const [tags, setTags] = useState(["df"]); // массив с тегами. По тегу df мы будет сортировать ТОЛЬКО наши товары и только с собачьими няшками (сами придумаем как)
    return <Container style={{gridTemplateColumns: "auto"}}>
        <Row>
            <Col xs={12}><h1>Добавить новый товар</h1></Col>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="pro-name">Название товара</Form.Label>
                    <Form.Control 
                        id="pro-name" 
                        type="text" 
                        value={name} 
                        onChange={e => {setName(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-img">Ссылка на изображение</Form.Label>
                    <Form.Control 
                        id="pro-img" 
                        type="url" 
                        value={link}
                        onChange={e => {setLink(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-price">Цена товара</Form.Label>
                    <Form.Control 
                        id="pro-price" 
                        type="number" 
                        value={price} 
                        step="10"
                        min="1"
                        max="29990"
                        onChange={e => {setPrice(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-cnt">Количество на складе</Form.Label>
                    <Form.Control 
                        id="pro-cnt" 
                        type="number" 
                        value={cnt}
                        min="0"
                        max="10000"
                        onChange={e => {setCnt(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-w">Вес товара</Form.Label>
                    <Form.Control 
                        id="pro-w" 
                        type="text" 
                        value={wight}
                        placeholder="100 г"
                        onChange={e => {setWight(e.target.value)}}
                    />
                    <Form.Text>Не забудьте прописать единицу измерения вместе с весом</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-disc">Скидка</Form.Label>
                    <Form.Select 
                        id="pro-disc"
                        type="text"
                        defaultValue={discount}
                        onChange={e => {setDiscount(e.target.value)}}
                    >
                        <option value={0}>Без скидки</option>
                        <option value={5}>5 %</option>
                        <option value={10}>10 %</option>
                        <option value={15}>15 %</option>
                        <option value={20}>20 %</option>
                        <option value={25}>25 %</option>
                        <option value={45}>45 %</option>
                        <option value={60}>60 %</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-info"></Form.Label>
                    <Form.Control 
                        id="pro-info" 
                        type="text" 
                        value={description}
                        as="textarea"
                        rows={4}
                        onChange={e => {setDescription(e.target.value)}}
                    />
                </Form.Group>
                
            </Form>
        </Row>
    </Container>
}
export default AddProduct;