import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, updateCartQuantity} from '../actions/cartActions';
import {Box, Button, Flex, Heading, Image, Input, Text} from '@chakra-ui/react';

const Cart =() =>{
    const cartItems = useSelector (state => state.cart.cartItems);
    const dispatch = useDispatch();


    const handleRemove = (id) =>{
        dispatch(removeFromCart(id));
    };


    const handleQuantityChange = (id, quantity) =>{
        dispatch(updateCartQuantity(id,quantity));
    };


    retun (
        <box  p={5}>
            <Heading as="h2" size="lg">

            </Heading>
        </box>
    )
}