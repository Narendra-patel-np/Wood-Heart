import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from 'react-icons/fa';
import OrderSummary from './OrderSummary';


export const Checkout = () => {


  const [formData, setFormData] = useState({
    username:'',
    street: '',
    state:'',
    zipCode: '',
    city: '',
    email: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderedData = JSON.parse(localStorage.getItem('ordered_data') || '[]');
    orderedData.push(formData);
    localStorage.setItem('ordered_data', JSON.stringify(orderedData));

    alert('Your order has been successfully placed. Thank you!');
    window.location.href = '/';
  };


  const cartItems = localStorage.getItem('cartData') || [];
  const [isSameAddress, setIsSameAddress] = useState(true);
    // const TotalCartPrice = localStorage.getItem('cartPrice');
  return (
    <Container maxW="container.sm"
    shadow={"dark-lg"}   
    borderRadius={10}  
    color="#0b3954"
    marginTop={20}
    marginBottom={20}>
      <Flex justify="center" align="center" minH="100vh">
        {cartItems && cartItems.length > 0 ? (
          <form onSubmit={handleSubmit}>
                <Grid templateColumns="1fr" gap={4} >
                    {/* order summary */}
                    
                        <OrderSummary />
                        </Grid>


            <Divider />
            {/* Billing Address */}
            <Grid templateColumns="1fr" gap={4}>
              <Heading as="h3" size="lg">
                Billing Address
              </Heading>
              <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="Gauri Bidwai"  value={formData.username}
              onChange={handleInputChange}
              />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="gauribi@example.com"  name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />
              </FormControl>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="chat Street ,sadhu vihar"   name="street"
              value={formData.street}
              onChange={handleInputChange}
              required />
              </FormControl>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="India"  name="city"
              value={formData.city}
              onChange={handleInputChange}
              required />
              </FormControl>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <FormControl id="state">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="MH"  name="state"
              value={formData.state}
              onChange={handleInputChange}
               />
                </FormControl>
                <FormControl id="zip">
                  <FormLabel>Zip</FormLabel>
                  <Input type="number" placeholder="40001"   name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required/>
                </FormControl>
              </Grid>
            </Grid>

            <Divider />

            {/* Payment */}
            <Grid templateColumns="1fr" 
            gap={4} mt={4}  
            marginTop={10}
            marginBottom={10}>
              <Heading as="h3" size="lg">
                Payment
              </Heading>
              <Stack spacing={4}>
                <Text fontSize="lg">Accepted Cards</Text>
                <Flex>
                  <i className="fab fa-cc-visa" aria-label="visa" />
                  <i className="fab fa-cc-amex" aria-label="amex" />
                  <i className="fab fa-cc-mastercard" aria-label="mastercard" />
                  <i className="fab fa-cc-discover" aria-label="discover" />
                </Flex>
              </Stack>
              <FormControl id="nameoncard">
                <FormLabel>Name on Card</FormLabel>
                <Input type="text"  name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              placeholder="Gauri A. Bidwai" 
              required/>
              </FormControl>
              <FormControl id="ccn">
                <FormLabel>Credit Card Number</FormLabel>
                <Input type="number" placeholder="1111-2222-3333-4444"  name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required/>
              </FormControl>
              <FormControl id="expmonth">
                <FormLabel>Exp Month</FormLabel>
                <Input type="number" placeholder="September"  name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required/>
              </FormControl>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <FormControl id="expyear">
                  <FormLabel>Exp Year</FormLabel>
                  <Input type="number" placeholder="2027" />
                </FormControl>
                <FormControl id="cvv">
                  <FormLabel>CVV</FormLabel>
                  <Input type="number" placeholder="665"  name="cvc"
              value={formData.cvc}
              onChange={handleInputChange}
              required/>
                </FormControl>
              </Grid>
            </Grid>

          
            {!isSameAddress && (
                  
                <form action="">
            <Grid templateColumns="1fr" gap={4} mt={4}>
                <Heading as="h3" size="lg">
                  Shipping Address
                </Heading>
                <FormControl id="shipping-fullname">
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" placeholder="Gauri A. Bidwai" />
                </FormControl>
                <FormControl id="address2">
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="chat Street ,sadhu vihar" />
              </FormControl>
              <FormControl id="city2">
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="India" />
              </FormControl>
              </Grid>
              <Grid templateColumns="1fr 1fr" gap={4}>
                <FormControl id="state2">
                  <FormLabel>State</FormLabel>
                  <Input type="text" placeholder="MH" />
                </FormControl>
                <FormControl id="zip2">
                  <FormLabel>Zip</FormLabel>
                  <Input type="number" placeholder="400001" />
                </FormControl>
                </Grid>
              </form>
              
            )}
            <FormControl>
              <FormLabel htmlFor="issameaddress">
                <Checkbox id="issameaddress"    isChecked={isSameAddress}
                  onChange={() => setIsSameAddress(!isSameAddress)}>
                  Shipping address same as billing
                </Checkbox>
              </FormLabel>
            </FormControl>

          
            <Button type="submit" 
            colorScheme="blue" mt={4} 
             bg="#0b3954"
            color="#ffb128"
            size="lg"
            fontSize="md"
            marginTop={10}
            marginBottom={20}
            rightIcon={<FaArrowRight />}
            >
            Complete Order
            </Button>
          </form>
            ) : (
          <Box>
            <Text color="#0b3954"><h1>Your cart is empty.</h1></Text>
          </Box>
            )}

      </Flex>
    </Container>
  );
};


