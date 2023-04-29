import {useState} from "react";
import {XOctagon} from "react-bootstrap-icons";
import "./style.css"

const Modal = () => {
	const [isReg, setIsReg] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [pwd2, setPwd2] = useState("");

	const changeForm = (e) => {
		e.preventDefault();
		setIsReg(!isReg);
	}
	return <div className="modal-wrapper">
		<div className="modal">
			<button className="modal-close">
				<XOctagon/>
			</button>
			<h3>{isReg ? "Регистрация" : "Вход"}</h3>
			<form>
				{isReg && <input 
					type="text" 
					placeholder="Ваше имя" 
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>}
				<input 
					type="email" 
					placeholder="Ваш электронный адрес"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input 
					type="password" 
					placeholder="Ваш пароль"
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
				/>
				{isReg && <input 
					type="password" 
					placeholder="Повторите пароль"
					value={pwd2}
					onChange={(e) => setPwd2(e.target.value)}
				/>}
				<div className="modal-btns">
					{/* Если у меня форма регистрации и пароли не равны или не введен пароль - кнопка не активна */}
					<button type="submit" disabled={isReg && (!pwd || pwd !== pwd2)}>
						{isReg ? "Зарегистрироваться" : "Войти"}
					</button>
					<a className="modal-link" onClick={changeForm}>
						{isReg ? "Войти" :"Зарегистрироваться"}
					</a>
				</div>
			</form>
		</div>
	</div>
}

export default Modal;









