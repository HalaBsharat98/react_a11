import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Products from './components/products/Products.jsx';




export default function App(){

  return (
    <>
    <div className="container">
    <Navbar/>
     <Products/>
    <Footer/>

</div>  
    </>
  );
}