import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { CartProductMeta } from './CartProductMeta';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const OrderSummary: React.FC = () => {
  
  
  let Data=useSelector((store:any)=>store.authReducer.UserData)
  let cartItems=Data.addToCart;

  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);

  useEffect(() => {
   
    let sum=0;
    cartItems.map((el:any)=>{
     console.log(sum,el.price,el.quantity)
     sum+=+el.price*(+el.quantity)});
     setTotalCartPrice(sum);
     console.log(sum)
    setTotalCartPrice(sum)
  }, []);

  return (
    <Box boxShadow='2xl' 
    p='6' rounded='md' 
    bg='white'  
    marginTop={5}
    w={"100%"}
     marginBottom={5} 
    // shadow={"dark-lg"}   
    borderRadius={10}  
    className="color-changing-box"
    transition="box-shadow 0.3s ease-in-out" 
    _hover={{
      boxShadow: "0px 0px 20px 0px #ffb128",
    }}
   >
   

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        {/* <Heading as="h1" size="xl" mb={6}>
          Cart Summary
        </Heading> */}
         <Heading fontFamily={"poppins"} as="h3" mt={4} mb={4}>
                    Order Summary
                    </Heading>

        <Stack spacing={4} gap={"40px"}>
          {cartItems.map((item:any) => (
            // <motion.div
            //   key={item.id}
            //   initial={{ opacity: 0, x: -20 }}
            //   animate={{ opacity: 1, x: 0 }}
            //   exit={{ opacity: 0, x: -20 }}
            // >
            //   <Flex
            //     borderWidth="1px"
            //     borderRadius="lg"
            //     overflow="hidden"
            //     shadow="md"
            //   >
            //     <Image
            //       src={item.image}
            //       alt={item.name}
            //       width={100}
            //       height={100}
            //       objectFit="cover"
            //     />
            //     <Flex
            //       direction="column"
            //       justifyContent="space-between"
            //       p={4}
            //       flex="1"
            //     >
            //       <Text fontSize="xl">{item.name}</Text>
            //       <Text fontSize="lg">
            //         Price: ${item.price.toFixed(1)}
            //       </Text>
            //     </Flex>
            //   </Flex>
            // </motion.div>
            <Flex alignItems={"center"} justifyContent={"space-between"}>

           <Box>
           <CartProductMeta   
            name={item.name}
            description={item.category}
            image={item.image}
            price={item.price}
            brand={item.brand}
          
          />
           </Box>
        
          <Box>
<Text color='gray.600' mb={"2px"} fontSize="14">Quantity : {item.quantity}</Text>
          </Box>
           </Flex>
          ))}
        </Stack>
        <Box mt={6}>
          <Text fontSize="24" fontWeight={"600"} >
            Total Price: $ {totalCartPrice.toFixed(1)}
          </Text>
        </Box>
      </Flex>
    </motion.div>
    </Box>
  );
};

export default OrderSummary;
