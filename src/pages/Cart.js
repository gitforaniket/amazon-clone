import React from 'react'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'
import styled from 'styled-components'

function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += ( item.product.price * item.product.quantity )
        })
        return total;
    }

    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            count += item.product.quantity;
        })

        return count;
    }

    return (
        <Container>
            <CartItems cartItems={cartItems}></CartItems>
            <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}></CartTotal>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`