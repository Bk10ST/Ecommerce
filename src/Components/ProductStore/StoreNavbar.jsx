import  './StoreNav.css'

export const StoreNav = () => {
    return (
        <>
            <div className='header-dashboard pb-3'>
                <h1 className='text-center title-dashboard text-uppercase pt-4 pb-2'>January Sale 2024</h1>
                <div className="container">
                    <div className="row">
                        <div className="box-dashboard d-flex mt-3">
                            <div className="col-md-3">
                                <div className="num-1 text-center mt-2">
                                    <p className='num-1 pt-3 pb-3'>1
                                        <span className="num-1-arrow"> → </span>
                                        <b className='mx-3 subtitle-dashboard'>
                                            Product Details
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="num-1 text-center mt-2">
                                    <p className='num-1 pt-3 pb-3'> 2
                                        <span className="num-1-arrow"> → </span>
                                        <b className='mx-3 subtitle-dashboard '>
                                            Add to Cart
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="num-1 text-center mt-2">
                                    <p className='num-1 pt-3 pb-3'> 3
                                        <span className="num-1-arrow"> → </span>
                                        <b className='mx-3 subtitle-dashboard'>
                                            Payment
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="num-1 text-center mt-2">
                                    <p className='num-1 pt-3 pb-3'> 4
                                        <span className="num-1-arrow"> → </span>
                                        <b className='mx-3 subtitle-dashboard'>
                                            Confirm
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}