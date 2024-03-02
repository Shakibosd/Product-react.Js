import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop',price:'US$99.99/mo'},
    {name:'Illustator',price:'US$60.74/mo'},
    {name:'PDF Reader',price:'US$6.74/mo'},
  ]
  return (
    <div className="App">
      <header className="App-header">
       <Product Product={products[0]}></Product>
       <Product Product={products[1]}></Product>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'400px',
    width:'400px',
    float:'left',
  }  
  const {name,price}=props.Product;
  return(
    <div style={productStyle}>
      <p>Similar In Iook Different In Data.</p>
       <h3>{name}</h3>
       <h5>{price}</h5>
       <button>Buy Now</button>
    </div>
  )
}


export default App;
