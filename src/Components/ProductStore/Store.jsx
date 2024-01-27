import { useNavigate } from 'react-router-dom';

import './store.css'

export const Store = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/add')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div className="products-dashboard">
                        <div className="box">
                            <h2 className="products-header pt-4 pb-3 mx-3">Product's</h2>
                            <div className="products">
                                <div className="product-1 d-flex mx-3">
                                    <div className="img">
                                        <img src="https://en-ae.dropkicks.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw45ff3343/dk/DK2/N/K/5/5/3/DK2_NK553558_154_196969278243_1.jpg?sw=750&sh=750&sm=fit&q=80" alt="shoes-img" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="products-subtitles">
                                            <ul>
                                                <b>Jordan</b>
                                                <li>20% OFF</li>
                                                <li>Availabe : 3 </li>
                                            </ul>
                                        </div>
                                        <div className="floater">
                                            <p>Rs 10000 </p>
                                        </div>
                                    </div>

                                </div>



                            </div>
                            <div className="products">
                                <div className="product-1 d-flex mx-3">
                                    <div className="img">
                                        <img src="https://en-ae.dropkicks.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw45ff3343/dk/DK2/N/K/5/5/3/DK2_NK553558_154_196969278243_1.jpg?sw=750&sh=750&sm=fit&q=80" alt="shoes-img" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="products-subtitles">
                                            <ul>
                                                <b>Jordan</b>
                                                <li>20% OFF</li>
                                                <li>Availabe : 3 </li>
                                            </ul>
                                        </div>
                                        <div className="floater">
                                            <p>Rs 10000 </p>
                                        </div>
                                    </div>

                                </div>



                            </div>
                            <div className="products">
                                <div className="product-1 d-flex mx-3">
                                    <div className="img">
                                        <img src="https://en-ae.dropkicks.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw45ff3343/dk/DK2/N/K/5/5/3/DK2_NK553558_154_196969278243_1.jpg?sw=750&sh=750&sm=fit&q=80" alt="shoes-img" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="products-subtitles">
                                            <ul>
                                                <b>Jordan</b>
                                                <li>20% OFF</li>
                                                <li>Availabe : 3 </li>
                                            </ul>
                                        </div>
                                        <div className="floater">
                                            <p>Rs 10000 </p>
                                        </div>
                                    </div>

                                </div>



                            </div>
                            <div className="products">
                                <div className="product-1 d-flex mx-3">
                                    <div className="img">
                                        <img src="https://en-ae.dropkicks.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw45ff3343/dk/DK2/N/K/5/5/3/DK2_NK553558_154_196969278243_1.jpg?sw=750&sh=750&sm=fit&q=80" alt="shoes-img" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="products-subtitles">
                                            <ul>
                                                <b>Jordan</b>
                                                <li>20% OFF</li>
                                                <li>Availabe : 3 </li>
                                            </ul>
                                        </div>
                                        <div className="floater">
                                            <p>Rs 10000 </p>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="side-box">
                        <h1 className="products-header pt-4 pb-3 mx-3">Summary</h1>
                        <div className="summary-box mx-3">
                            <h5 className="products-header pb-2">Jordan</h5>
                            <p className="">SubTotal :  <b className="fs-4 mx-2">
                                Rs 1000
                            </b> </p>
                            <p className="pb-2">Tax :
                                <b className="fs-4 mx-5">
                                    Rs 1000
                                </b>
                            </p>
                            <p className="pb-2">Delivery :
                                <b className="fs-4 mx-4">
                                    Rs 1000
                                </b>
                            </p>
                            <p className="">Delivery Fee :
                                <b className="fs-4 mx-1">
                                    Rs 1000
                                </b>
                            </p>
                            <div className="btn-summary">
                                <button type="submit" className='btn btn-primary btn-logined mb-5'>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="btn-summary">
                        <button className="btn btn-primary btn-logined" onClick={handleClick}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 