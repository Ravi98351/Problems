import { Button, Input ,Box } from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import "./Form.css"
import {BsFillBriefcaseFill} from "react-icons/bs"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import {
    FormControl,
    FormLabel,
   
  } from '@chakra-ui/react'
import axios from 'axios';


  export default function InitialFocus({refresh}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [form,setForm]=useState({});
       

   
    const [task,setTask]=useState([])
   

const {Taskame,ProjectName,Assignee,Taskdate,Discription,time} = form ;

const handleChange=(e)=>{
    const {value,name}=e.target;

    setForm({...form,[name]:value})
}

const hanldeSubmit=(e)=>{
axios.post("http://localhost:8080",form)
setTask([...task,form])
onClose()
refresh(Date.now())
}

return (
      <>
        <Button onClick={onOpen} colorScheme='messenger'  h="35px">+ New Task </Button>
         <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color={"red"}>Add New Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel className="formlable">Task name</FormLabel>
                <Input 
                ref={initialRef} 
                placeholder='Write a task name ' 
                name="taskname"
                isRequired
                value={Taskame} 
                onInput={handleChange}/>
              </FormControl>
  
              <FormControl mt={4} >
                <FormLabel display="flex" gap={"5px"} className="formlable"><BsFillBriefcaseFill size={"30px"}/>Project</FormLabel>
                <Input 
                placeholder='Project Name' 
                name="projectname" 
                value={ProjectName} 
                onInput={handleChange} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="formlable">Assignee</FormLabel>
                <Input
                 placeholder='Ravi Roshan' 
                 name="assignee" 
                value={Assignee} 
                onInput={handleChange} />
              </FormControl>

              
              <FormControl mt={4}>
                <FormLabel className="formlable">Due Date</FormLabel>
                <Input 
                type="date" 
             
                name="date" 
                value={Taskdate} 
                onInput={handleChange}/>
              </FormControl>

              
              <FormControl mt={4}>
                <FormLabel className="formlable">Task Description</FormLabel>
                <Input 
                placeholder='Enter Task Discription'
                name="description" 
                value={Discription}  
                onInput={handleChange}/>
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel className="formlable">Estimate Time</FormLabel>
                <Input 
                type="time"
                placeholder='Last name'
                name="estimatedtime" 
                value={time}  
                 onInput={handleChange}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}  onClick={hanldeSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


