import {useState, useEffect} from "react";

const Search = ({data}) => {
	// let text = "ololo"
	const [text, setText] = useState("");
	const [num, setNum] = useState(0);
	// в переменной text находится пустая строка
	const changeValue = (e) => {
		let val = e.target.value.toLowerCase();
		// console.log(e.target.value);
		setText(val);
		// setNum(num + 1); // num++ => 0 => 0+1
		/*
			При вводе текста в строку поиска, мы сопоставляем эту строку с данными из массива data
			В консоли выведем новый масивв с подходящими названиями
		*/
		// setNum(data.filter(el => el.name.toLowerCase().includes(
		// 	e.target.value.toLowerCase()
		// )).length);
		// setNum(data.filter(el => el.name.toLowerCase().includes(val)).length);
	}
	const changeText = () => {
		console.log("Click")
		setText("Привет!");
	}
	console.log(text);
	useEffect(() => {
		console.log("ololo");
	}, [num]);
	useEffect(() => {
		// console.log("ololo");
		let result = data.filter(el => el.name.toLowerCase().includes(text));
		setNum(result.length);
		console.log(result);
	}, [text]);
	return <>
		<input type="search" value={text} onChange={changeValue}/>
		{/*<button onClick={changeText}>Тык {num} раз</button>*/}
		{text && <p>По запросу {text} найдено {num} товаров</p>}
	</>
}

export default Search;

/*
	Жизненный цикл
	Mount - монтаж (отрисовка приложения)
	componentWillMount
	componentDidMount

	componentWillUpdate
	componentDidUpdate

	componentWillUnmount
	componentDidUnmount
*/

/*
	Без React:
	1) Создаем html-контент
	2) Взять нужные теги
	3) Повесить на input событие
	4) По событию добавлять в DOM нужный контент
*/
























