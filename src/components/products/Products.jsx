import Product from '../product/Product.jsx'

export default function Products(){
  const products=[
    {id:1,title:'product one',desc:'this is product one',price:100},
    {id:2,title:'product two',desc:'this is product two',price:200},
    {id:3,title:'product three',desc:'this is product three',price:300},
  ];
    return (
      <>
      <div className='row py-5'>
      {products.map((product)=>{
       return <Product {...product} key={product.id}/>
      })

      }
      </div>
      </>
    );
  }