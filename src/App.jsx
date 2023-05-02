import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
/* SPA - Single Page Application - Приложение с одной страницей */

import testData from "./assents/data.json";

// Подключаем компоненты
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General"; // index.jsx

// Подключаем странички
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import OldPage from "./pages/Old"

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user12"));
    const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
    const [token, setToken] = useState(localStorage.getItem("token12"));
    const [goods, setGoods] = useState(testData);
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
    }, [token])
    return (
        <>
            <Header 
                user={user} 
                upd={setUser} 
                searchArr={testData} 
                setGoods={setGoods} 
                setSearchResult={setSearchResult}
                setModalOpen={setModalOpen}
            />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/old" element={
                    <OldPage 
                        searchText={searchResult}
                        goods={goods}
                    />
                }/>
            </Routes>
            <Footer/>
            <Modal 
                isActive={modalOpen} 
                setIsActive={setModalOpen}
                setUser={setUser}
            />
        </>
    )
}

export default App;