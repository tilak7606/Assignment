import { Link } from "react-router-dom";


const Payment = () => {
  return (
    <div className="containerPayment">
      <div className="col-sm-6">
                      <Link to="/">
                    <a href="ecommerce-products.html" className="btn btn-link text-muted">
                        <i className="mdi goback  mdi-arrow-left me-1"></i> <span className='goback'>Go back</span> </a>
                      </Link>
                </div>
      <div className="row">
        <div className="col-lg-4 mb-lg-0 mb-3">
          <div className="cardPay p-3">
            <div className="img-box">
              <img
                src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                alt=""
              />
            </div>
            <div className="number">
              <label className="fw-bold" htmlFor="">
                **** **** **** 1060
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <small>
                <span className="fw-bold">Expiry date:</span>
                <span>10/16</span>
              </small>
              <small>
                <span className="fw-bold">Name:</span>
                <span>Kumar</span>
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-3">
          <div className="cardPay p-3">
            <div className="img-box">
              <img
                src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                alt=""
              />
            </div>
            <div className="number">
              <label className="fw-bold">**** **** **** 1060</label>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <small>
                <span className="fw-bold">Expiry date:</span>
                <span>10/16</span>
              </small>
              <small>
                <span className="fw-bold">Name:</span>
                <span>Kumar</span>
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-3">
          <div className="cardPay p-3">
            <div className="img-box">
              <img
                src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                alt=""
              />
            </div>
            <div className="number">
              <label className="fw-bold">**** **** **** 1060</label>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <small>
                <span className="fw-bold">Expiry date:</span>
                <span>10/16</span>
              </small>
              <small>
                <span className="fw-bold">Name:</span>
                <span>Kumar</span>
              </small>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="cardPay p-3">
            <p className="mb-0 fw-bold h4">Payment Methods</p>
          </div>
        </div>
        <div className="col-12">
          <div className="cardPay p-3">
            <div className="card-body border p-0">
              <p>
                <a
                  className="btnPay btnPay-primaryPay w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <span className="fw-bold">PayPal</span>
                  <span className="fab fa-cc-paypal"></span>
                </a>
              </p>
              <div className="collapse p-3 pt-0" id="collapseExample">
                <div className="row">
                  <div className="col-8">
                    <p className="h4 mb-0">Summary</p>
                    <p className="mb-0">
                      <span className="fw-bold">Product:</span>
                      <span className="c-green">: Name of product</span>
                    </p>
                    <p className="mb-0">
                      <span className="fw-bold">Price:</span>
                      <span className="c-green">:$452.90</span>
                    </p>
                    <p className="mb-0">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Atque nihil neque quisquam aut repellendus, dicta vero?
                      Animi dicta cupiditate, facilis provident quibusdam ab
                      quis, iste harum ipsum hic, nemo qui!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body border p-0">
              <p>
                <a
                  className="btnPay btnPay-primaryPay p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <span className="fw-bold">Credit Card</span>
                  <span className="">
                    <span className="fab fa-cc-amex"></span>
                    <span className="fab fa-cc-mastercard"></span>
                    <span className="fab fa-cc-discover"></span>
                  </span>
                </a>
              </p>
              <div className="collapse show p-3 pt-0" id="collapseExample">
                <div className="row">
                  <div className="col-lg-5 mb-lg-0 mb-3">
                    <p className="h4 mb-0">Summary</p>
                    <p className="mb-0">
                      <span className="fw-bold">Product:</span>
                      <span className="c-green">: Name of product</span>
                    </p>
                    <p className="mb-0">
                      <span className="fw-bold">Price:</span>
                      <span className="c-green">:$452.90</span>
                    </p>
                    <p className="mb-0">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Atque nihil neque quisquam aut repellendus, dicta vero?
                      Animi dicta cupiditate, facilis provident quibusdam ab
                      quis, iste harum ipsum hic, nemo qui!
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <form action="" className="form">
                      <div className="row">
                        <div className="col-12">
                          <div className="form__div">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" "
                            />
                            <label htmlFor="" className="form__label">
                              Card Number
                            </label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="form__div">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" "
                            />
                            <label htmlFor="" className="form__label">
                              MM / yy
                            </label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="form__div">
                            <input
                              type="password"
                              className="form-control"
                              placeholder=" "
                            />
                            <label htmlFor="" className="form__label">
                              cvv code
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form__div">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=" "
                            />
                            <label htmlFor="" className="form__label">
                              name on the card
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="btnPay btnPay-primaryPay w-100">
                            Submit
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="btnPay btnPay-primaryPay payment">Make Payment</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
