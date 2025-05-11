import { Link } from "react-router-dom";
import {Home,Hotel} from "lucide-react"

const Cart = () => {
  const handleClick = () => {
    // Scroll to the top when the link is clicked
    window.scrollTo(0, 0);
};

  return (
    <div className="containerCart">
        <div className="row">
                <div className="col-sm-6">
                      <Link to="/"  onClick={handleClick}>
                    <a href="ecommerce-products.html" className="btn btn-link text-muted">
                        <i className="mdi goback  mdi-arrow-left me-1"></i> <span className='goback'>Go back</span> </a>
                      </Link>
                </div>
            </div> 
    <div className="row">
        <div className="col-xl-8">
            <div className="card border">
                <div className="card-body">

                    <div className="d-flex align-items-start border-bottom pb-3">
                        <div className="me-4">
                            <img src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg" alt="" className="avatar-lg rounded"/>
                        </div>
                        <div className="flex-grow-1 align-self-center overflow-hidden">
                            <div>
                                <h5 className="text-truncate font-size-18"><a href="" className="text-dark">Bacon Burger</a></h5>
                                <p className="text-muted mb-0">
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star-half text-warning"></i>
                                </p>
                                <p className="mb-0 mt-1"><span className="fw-medium">2.0 kms | ₹36 Delivery fee will apply</span></p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-trash-can-outline"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-heart-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Price</p>
                                    <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">$500</del></span>$450</h5>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Quantity</p>
                                    <div className="d-inline-flex">
                                        <select className="form-select form-select-sm w-xl">
                                            <option value="1">1</option>
                                            <option value="2" selected>2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Total</p>
                                    <h5>$900</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card border">
                <div className="card-body">

                    <div className="d-flex align-items-start border-bottom pb-3">
                        <div className="me-4">
                            <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" alt="" className="avatar-lg rounded"/>
                        </div>
                        <div className="flex-grow-1 align-self-center overflow-hidden">
                            <div>
                                <h5 className="text-truncate font-size-18"><a href="" className="text-dark">Cheeseburger </a></h5>
                                <p className="text-muted mb-0">
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                </p>
                                <p className="mb-0 mt-1"><span className="fw-medium">2.0 kms | ₹36 Delivery fee will apply</span></p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-trash-can-outline "></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-heart-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Price</p>
                                    <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">$280</del></span>$240</h5>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Quantity</p>
                                    <div className="d-inline-flex">
                                        <select className="form-select form-select-sm w-xl">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3" selected>3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Total</p>
                                    <h5>$720</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card border ">
                <div className="card-body">

                    <div className="d-flex align-items-start border-bottom pb-3">
                        <div className="me-4">
                            <img src="https://img.freepik.com/premium-photo/cheeseburger-with-pickle-it_878462-38.jpg" alt="" className="avatar-lg rounded"/>
                        </div>
                        <div className="flex-grow-1 align-self-center overflow-hidden">
                            <div>
                                <h5 className="text-truncate font-size-18"><a href="" className="text-dark">Veggie Burger</a></h5>
                                <p className="text-muted mb-0">
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                </p>
                                <p className="mb-0 mt-1"><span className="fw-medium">2.0 kms | ₹36 Delivery fee will apply</span></p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-trash-can-outline"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-heart-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Price</p>
                                    <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">$750</del></span>$950</h5>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Quantity</p>
                                    <div className="d-inline-flex">
                                        <select className="form-select form-select-sm w-xl">
                                            <option value="1" selected>1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Total</p>
                                    <h5>$950</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="card border ">
                <div className="card-body">

                    <div className="d-flex align-items-start border-bottom pb-3">
                        <div className="me-4">
                            <img src="https://img.freepik.com/premium-photo/cheeseburger-with-pickle-it_878462-38.jpg" alt="" className="avatar-lg rounded"/>
                        </div>
                        <div className="flex-grow-1 align-self-center overflow-hidden">
                            <div>
                                <h5 className="text-truncate font-size-18"><a href="" className="text-dark">Veggie Burger</a></h5>
                                <p className="text-muted mb-0">
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                </p>
                                <p className="mb-0 mt-1"><span className="fw-medium">2.0 kms | ₹36 Delivery fee will apply</span></p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 ms-2">
                            <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-trash-can-outline"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="" className="text-muted px-1">
                                        <i className="mdi mdi-heart-outline"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Price</p>
                                    <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">$750</del></span>$950</h5>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Quantity</p>
                                    <div className="d-inline-flex">
                                        <select className="form-select form-select-sm w-xl">
                                            <option value="1" selected>1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mt-3">
                                    <p className="text-muted mb-2">Total</p>
                                    <h5>$950</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        {/* right side container  */}
        <div className="col-xl-4">
            <div className="mt-5 mt-lg-0">
                <div className="card border ">
                    <div className="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                    </div>
                    <div className="card-body p-4 pt-2">

                        <div className="table-responsive">
                            <table className="table mb-0">
                                <tbody>
                                    <tr>
                                        <td>Sub Total :</td>
                                        <td className="text-end">$ 780</td>
                                    </tr>
                                    <tr>
                                        <td>Discount : </td>
                                        <td className="text-end">- $ 78</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge :</td>
                                        <td className="text-end">$ 25</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax : </td>
                                        <td className="text-end">$ 18.20</td>
                                    </tr>
                                    <tr className='totalAmount'>
                                        <td>Total </td>
                                        <td className="text-end">$ 158.20</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Link to="/payment">
                <div className='total' >
                  Checkout 
                </div>
                </Link>
                <div >
                <div className="card p-3 py-3 mt-3 card-1 text-center">
        <h4>Delivery Address</h4>
        <div className="p-3 card-2"> 
        <div className="p-3 card-child">
            
            <div className="d-flex flex-row align-items-center">
              <span className="circle">
                  <i className="fa fa-home"></i>
              </span>
              
              <div className="d-flex flex-column ms-3">
                  <h6 className="fw-bold">Home</h6>
                  <span>2112, cottonwoon lane, <br/>Ground Floor, NY ,20021</span>
                  
              </div>
                
            </div>
        </div>
        
        
        <div className="p-3 card-child mt-4">
            
            <div className="d-flex flex-row align-items-center">
              <span className="circle-2">
                  <i className="fa fa-bank"></i>
              </span>
              
              <div className="d-flex flex-column ms-3">
                  <h6 className="fw-bold">Office</h6>
                  <span>3432, Awesome Tail lane, <br/>First Floor, NY, 43434</span>
                  
              </div>
                
            </div>
        </div>
        
        
        
        
        <div className="p-3 card-child mt-4 py-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
            
            <div className="d-flex flex-row align-items-center">
              <span className="circle-3">
                  <i className="fa fa-plus"></i>
              </span>
              
              <div className="d-flex flex-column ms-3 mt-1">
                  <h6 className="fw-bold text-primary">Add New Address</h6>
              </div>
            </div>
        </div> 


  {/* offcanvas  */}
<div className="offcanvas offcanvas-end" tabIndex={1}  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

    {/* closing offcanvas  */}
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

   {/* canvas body  */}
   <div className="offcanvas-body">
  <div className="container contadd py-5">
  <div className="row d-flex justify-content-center align-items-center">
    <div className="col">
      <div className="card my-4 shadow-3">
        <div className="row g-0">
         
          <div className="col-xl-6" style={{width:"auto"}}>
            <div className="card-body  text-black">
              <h3 className="mb-4 text-uppercase">Delivery Info</h3>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='First Name' />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Last Name' />
                  </div>
                </div>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example8" className="form-control form-control-lg" placeholder='Phone number' />
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='State' />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='City' />
                  </div>
                </div>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example3" className="form-control form-control-lg" placeholder='Zipcode' />
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example8" className="form-control form-control-lg" placeholder='House No., Building Name' />
              </div>


              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example2" className="form-control form-control-lg" placeholder='Road name, Area, Colony' />
              </div>
            <div className='type'>
               <span className='Home'><Home size={16} color='gray'/>  Home</span>
                <span className='Work'><Hotel size={17} color='gray'/> Work</span>
            </div>
              <div className="d-flex justify-content-center  pt-3">
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn add btn-success btn-lg ms-2"
                  style={{backgroundColor:"hsl(210, 100%, 50%)"}}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>
                     </div>
                   </div>
                </div>
            </div>

        </div>
    </div>
    
</div>
  )
}

export default Cart