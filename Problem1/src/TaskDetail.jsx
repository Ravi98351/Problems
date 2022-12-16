import React, { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,Input,SimpleGrid,Box
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
 import axios from 'axios';
  import {BsFillCreditCardFill,BsStopwatchFill,BsFillCalendarDateFill} from "react-icons/bs";
  import {FaUserCircle} from "react-icons/fa";
  import {TbFileDescription} from "react-icons/tb";
  import {GrValidate} from "react-icons/gr"
import "./TaskDetails.css"

  

export default function TaskDetail(details,handleClick) {
console.log(typeof(details.taskname))

    
 
   const { isOpen, onOpen, onClose } = useDisclosure()


const handleClick=()=>{
    
    onOpen()
}
  

 


// useEffect(()=>{
//    onOpen()
// },[details])


return (
      <>
     <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`TASK DETAILS`}</DrawerHeader>
            <Button> <GrValidate/> mark as complte</Button>
            <DrawerBody>
 
            <SimpleGrid columns={2} spacing={41} fontSize="30px" fontWeight={"500"} padding="10px">
            <Box  height='40px'className='details' ><BsFillCreditCardFill/>Project :</Box>
            <Box  height='40px'>{}</Box>
            <Box  height='40px' className='details'><FaUserCircle/>Assignee :</Box>
            <Box  height='40px'></Box>
            <Box  height='40px'className='details'><BsStopwatchFill/>Due Date :</Box>
            <Box  height='40px'></Box>
            <Box  height='40px'className='details'><TbFileDescription/>Description : </Box>
            <Box  height='40px'className='details'></Box>
            <Box  height='40px'className='details'><BsFillCalendarDateFill/>Estimate :</Box>
            <Box  height='40px'></Box>
            </SimpleGrid> 

            </DrawerBody>
            <DrawerFooter>
                <Button colorScheme='blue' mr={3}>Save</Button>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}
