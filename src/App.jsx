import {useState, useEffect, createContext} from "react";
import {Routes, Route} from "react-router-dom";

/* SPA - Single Page Application - Приложение с одной страницей */

// import testData from "./assents/data.json";
import Ctx from "./ctx"
// Подключаем компоненты
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General"; // index.jsx

// Подключаем странички
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user12"));
    const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
    const [token, setToken] = useState(localStorage.getItem("token12"));
    /*
        Есть массив с товарами (основной) [a,b,c] => [b,c] => [a]???
        | |
         U
        Есть массив с товарами фильтруемый [b,c], [a]
    */
    const [baseData, setBaseData] = useState([]);
    const [goods, setGoods] = useState(baseData);

    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    // Сохрани в переменную user то значение, что находится внутри useState

    useEffect(() => {
        if (user) {
            setUserId(localStorage.getItem("user12-id"));
            setToken(localStorage.getItem("token12"));
        } else {
            localStorage.removeItem("user12-id")
            localStorage.removeItem("token12")
            setUserId(null);
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        console.log("token", token);
        if (token) {
            fetch("https://api.react-learning.ru/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBaseData(data.products);
                })
        }
    }, [token])

    useEffect(() => {
        setGoods(baseData)
    }, [baseData])

    // const Ctx = createContext({});
    // import {Ctx} from "./App"

    return (
        // объявляем контекст в приложении
        /*
        * age = 2
        * value = {
        *   name: "User",
        *   setName: function(){}
        *   age => age: age
        * }
        * */
        <Ctx.Provider value={{
            searchResult,
            setSearchResult,
            setBaseData,
            baseData
        }}>
            {/*<Ctx2.Provider>*/}
            {/*Так можно использовать еще один контекст для ограниченного количества компнентов*/}
                <Header
                    user={user}
                    upd={setUser}
                    searchArr={baseData}
                    setGoods={setGoods}
                    setModalOpen={setModalOpen}
                />
            {/*</Ctx2.Provider>*/}
            <main>
                <Routes>
                    <Route path="/" element={<Home user={user} setActive={setModalOpen}/>}/>
                    <Route path="/catalog" element={
                        <Catalog 
                            goods={goods}
                            userId={userId}
                        />
                    }/>
                    <Route path="/old" element={
                        <OldPage
                            goods={goods}
                        />
                    }/>
                    <Route path="/profile" element={
                        <Profile user={user} setUser={setUser}/>}
                    />
                    {/*
                        :id - параметризованный запрос, где то, что идет после : является различными данными, которые можно вызвать при помощи свойства id
                        {id: "...."}

                        шаблон: /product/:brand/:year/:id
                        /product/samsung/2019/12345
                        /product/samsung/2019/78923
                        /product/xaomi/2022/93838
                        /product/apple/2019/32483

                        шаблон: /product/year/:year
                        {year: "..."}
                        /product/year/2022
                        /product/year/2019
                    */}
                    <Route path="/product/:id" element={<Product />}/>
                    <Route path="/add/product" element={<AddProduct/>}/>
                </Routes>
            </main>
            <Footer/>
            <Modal 
                isActive={modalOpen} 
                setIsActive={setModalOpen}
                setUser={setUser}
            />
        </Ctx.Provider>
    )
}

export default App;