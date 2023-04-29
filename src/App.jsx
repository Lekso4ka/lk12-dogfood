import {useState} from "react";

import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General"; // index.jsx

const promoData = ["=)", "^_^", "O_o", "x_x", "=(", ";(", "0l0"];

console.log(testData);

const App = () => {
    // const user = localStorage.getItem("user12");
    const [user, setUser] = useState(localStorage.getItem("user12"))
    const [goods, setGoods] = useState(testData)
    const [searchResult, setSearchResult] = useState("");
    // Сохрани в переменную user то значение, что находится внутри useState
    return (
        <>
            {/* upd - передали функцию setUser внутрь компонента Header, чтобы внутри использовать ее как слово upd() */}
            <Header 
                user={user} 
                upd={setUser} 
                searchArr={testData} 
                setGoods={setGoods} 
                setSearchResult={setSearchResult}
            />
            <div className="container">
                {searchResult && <p className="search-result">{searchResult}</p>}
                {goods.map((pro, i) => (
                    <Card key={i} img={pro.pictures} name={pro.name} price={pro.price} />
                ))}
                {/*{promoData.map(el => <Promo key={el} text={el}/>)}*/}
            </div>
            <Footer/>
            <Modal/>
        </>
    )
}

export default App;