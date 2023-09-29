import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../Redux/rootReducer"; 
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useNumberInput,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { CartDrawer } from './CartDrawer';
import { getSingleProductData } from '../Redux/UserPage/action';

export const SingleProductCard: React.FC = () => {
  let { id } = useParams<{ id: any }>();

   // Specify the type for 'name'
  const dispatch = useDispatch();
  
  let { singleProduct, isLoading, isError } = useSelector((store: RootState) => ({
    singleProduct: store.productReducer.singleProduct,
    isLoading: store.productReducer.isLoading,
    isError: store.productReducer.isError,
  }));

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 1000,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClose() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    // Dispatch the action to fetch single product data
    dispatch(getSingleProductData(id));
  }, []);

  // ... rest of your component code
console.log(singleProduct)


  return (
    <Flex
      direction={["column", "row"]}
      w={"80%"}
      m={"auto"}
      pb={"80px"}
      pt={"50px"}
      fontFamily={"Poppins"}
      bg={"#f5f5f5"}
    >
      <Box>
        <Image src={singleProduct?.image} w={["500px", "500px"]} m={"50px auto"} />
      </Box>
      <Box bgColor={"white"} borderRadius={"20px"} w={["100%", "45%"]} p={"50px"} m={"auto"}>
        <Text color={"#0b3954"} textTransform={"uppercase"} fontSize={32} fontWeight={600}>
          {singleProduct?.name}
        </Text>
        <Text fontWeight={500}>$ {singleProduct?.price}</Text>
        <Flex alignItems={"center"} fontSize={18} m={"10px auto"}>
          {new Array(Math.floor(singleProduct?.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="#ffb128" />
            </Box>
          ))}
          {new Array(5 - Math.floor(singleProduct?.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="grey" />
            </Box>
          ))}
          <Box ml={"10px"} alignItems={"center"}>
            <Text fontSize={"15px"} color={"#5c676d"}>
              ({singleProduct?.reviews.length} customer reviews)
            </Text>
          </Box>
        </Flex>
        <Text color={"#5c676d"} m={"20px 0"}>
          {singleProduct?.about}
        </Text>
        <hr />
        <HStack maxW="150px" mt={"20px"}>
          <Button bg="#f5f5f5" {...dec}>
            -
          </Button>
          <Input textAlign={"center"} {...input} />
          <Button bg="#f5f5f5" {...inc}>
            +
          </Button>
        </HStack>
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          bgColor={"#2b3954"}
          color={"white"}
          colorScheme="#f8ac2a"
          size={"lg"}
          fontWeight={500}
          _hover={{ bgColor: "#e89f22" }}
          p={"20px 20px"}
          w={["100%", "300px"]}
          m={"20px 0"}
          borderRadius={"10px"}
          fontSize={20}
        >
          ADD TO CART
        </Button>
      </Box>
      {isOpen && <CartDrawer onOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
};
