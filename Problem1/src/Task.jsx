import React, { useEffect, useState } from 'react'
import { Select,Box, Button, Input, Text,Flex,Spacer} from '@chakra-ui/react';

import {AiFillCheckCircle} from "react-icons/ai"
import SelectTag from './component/selectTag'
import InitialFocus from "./Form"
import axios from 'axios'
import { useDisclosure } from '@chakra-ui/react';
import "./Task.css"
import TaskDetail from './TaskDetail';
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";


export default function Task() {
   const [data,setData]=useState([])
 const [details,setdetails]=useState({})
  const [recall,setRefresh]=useState("")
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }




const refresh=(refresh)=>{
setRefresh(refresh)
}

useEffect(()=>{
 axios.get(`http://localhost:8080`)
.then((res)=>setData(res.data))
},[recall])

const handleDetails=(id)=>{
  axios.get(`http://localhost:8080/${id}`)
  .then((res)=>setdetails(res.data))
 
  TaskDetail(details,handleClick())
}

return (
      <Box style={{"display":"flex"}}>
      <Box className="sidebar"></Box>
      <Box style={{"border":"2px solid red","width":"80%","padding":"0px 160px"} }>
      <Box style={{"fontSize":"27px","fontWeight":"500"}}>My Tasks |</Box>
      <br/>
      <Box style={{"display":"flex","flexWrap":"wrap",'gap':"5px"}}w={[300,400,800,900]} display={["flex","grid","flex"]} >
     
      <SelectTag text={"Client : All"} />
      <SelectTag text={"Project: All"}/>
      <SelectTag text={"Tag: All"}/>
      <SelectTag text={"Status: Open"}/>
      <SelectTag text={" Source:Inter.."} />
      </Box>
<br/>

      <Box style={{"display":"flex",'gap':"5px","border":"1px solid gray","w":"100%","borderRadius":"5px","padding":"10px"}} >
       <InitialFocus refresh={refresh}/>
      <Select placeholder="Sort : Project" backgroundColor={"gray.100"} size='120px' textAlign="center" w="140px" h="35px" borderColor="gray" borderRadius="7px" _hover={{backgroundColor:"#e2e6eb"}}> 
      <option value='Project'>Project</option>
      <option value='Estimate'>Estimate</option>
      <option value='Due Date'>Due Date</option>
      <option value='Last Update'>Last Update</option>
      <option value='Newer First'>Newer First</option>
      <option value='Older First'>Older First</option>
      </Select>
     
        <Input w="250px" placeholder='Search Here ' marginLeft={"50%"} h="35px"></Input>
       
        </Box>
        
        <Box style={{'gap':"1px","border":"1px solid green","w":"100%","borderRadius":"5px","padding":"10px",}} h="750" overflow={"auto"} w={[300,400,800,900,1210]}>
         {
          data.map((e)=>(
           
            <Box className='boxx'>
              <Flex>
              <Box><AiFillCheckCircle className='AiFillCheckCircle'/></Box>
            
            <Box className='taskdiv'onClick={()=>{handleDetails(e._id)}} >
             <Text className='text'>{e.taskname}</Text>
            </Box>
            <Spacer />
            <FaEdit size={"38px"} className="FaEdit"/>
            <MdDelete size={"40px"} className="MdDelete "/>
            </Flex>
           <hr></hr>
            </Box>
       
        
            
          ))
         }

        </Box>
    </Box>
    </Box>
  )
}
