import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
const products= [
    {
      id: 1,
      src: '/shoes.jpg',
      name : 'Sepatu Baru',
      price: 'Rp 1.000.000',
      description: 'lorem sdfikjl kontsdfksadjflksdlkafsiad isdafjlksdflka sdfla lsdfjsadflk ksdfsdlkfjaslkf.'
    },
    {
      id: 2,
      src: '/shoes.jpg',
      name : 'Sepatu Baru',
      price: 'Rp 1.000.000',
      description: 'lorem sdfikjl kontsdfksad sdfasdf sdfasdsdf sdf s adfsadfasd fsdfsdf asff sd sdfsdaf asdfsadf as dfasdfjflksdlkafsiad isdafjlksdflka sdfla lsdfjsadflk ksdfsdlkfjaslkf.'
    },
    {
      id: 3,
      src: '/shoes.jpg',
      name : 'Sepatu Baru',
      price: 'Rp 1.000.000',
      description: 'lorem sdfikjl kontsdfksadjfl.'
    }
  ];

  const email = localStorage.getItem('email');
export default function ProductsPage() {
  const handleClick = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('fullname')
    localStorage.removeItem('text')
    localStorage.removeItem('confirm-password')
    window.location.href = '/login'
  }
  return (
    <>
    <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10"> 
    <Button classname='bg-black me-5' onClick={handleClick}>Log Out</Button>
    {email}
    </div>
    <div className="flex justify-center py-5">
        {products.map(item => (
        <CardProduct key={item.id}>
            <CardProduct.Header src={item.src}></CardProduct.Header>
            <CardProduct.Body name={item.name} >{item.description}</CardProduct.Body>
            <CardProduct.Footer price={item.price}></CardProduct.Footer>
        </CardProduct>
        ))}
        </div>
    </>
  )
}

