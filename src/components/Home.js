import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useProduct } from '../context/ProductProvider';

const Home = () => {

  const { state: { products, cart }, dispatch } = useProduct();
  console.log(cart)
  return (

    <div className="d-flex flex-wrap justify-content-center mt-5">
      {products.map((item,) => {
        return <div className="card mb-3 d-flex flex-wrap m-4 " style={{ width: '18rem' }}>
          <div className='justify-content-center'>
            <img width="150px" height="200px" src={item.images} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" fetchpriority="high" />
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col d-flex">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <div className="col d-flex justify-content-end">
                <h5 className="card-title text-success ">
                  ⭐ {item.rating}
                </h5>
              </div>
            </div>
            {/* <p className='card-text'>{item.description}</p> */}
            <p className='card-text'><b>Price: ${item.price}</b></p>
            <div id="card-footer" class="mt-2 d-flex flex-row flex-nowrap justify-content-center">
              {cart.some(p => p.id === item.id) ?
                (<button className='btn btn-danger'
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    });
                  }} >
                  Remove from Cart</button>)
                : (<button className='btn btn-warning'
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    });
                  }}>
                  Add To Cart
                </button>)}


            </div>
          </div>
        </div>
      })}


    </div>
  )

}

export default Home