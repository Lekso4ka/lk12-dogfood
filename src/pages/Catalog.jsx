import Card from "../components/Card/Card";

const Catalog = ({goods}) => {
	console.log(goods);
	return <div className="container">
		<h1 style={{margin: 0, gridColumnEnd: "span 3"}}>Каталог</h1>
		{goods.map((pro, i) => (
			// {name, price, likes, _id} => name={pro.name} price={pro.price} _id={pro._id} likes={pro.likes}
            <Card key={i} img={pro.pictures} {...pro}/>
        ))}
	</div>
}

export default Catalog;