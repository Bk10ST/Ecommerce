import React from 'react'
import {Store} from '../ProductStore/Store'
import { StoreNav } from '../ProductStore/StoreNavbar'

const Productdetails = () => {
  return (
    <div>
        <StoreNav/>
        <Store/>
    </div>
  )
}

export default Productdetails