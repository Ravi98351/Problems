import { Select} from '@chakra-ui/react'
export default function SelectTag({text,Option1,Option2,Option3}) {
  return (
    <div>
      <Select placeholder={text} size='120px' textAlign="center" w="140px" h="35px" borderColor="gray" borderRadius="7px" _hover={{backgroundColor:"#e2e6eb"}}> 
      <option value='option1'>{Option1}</option>
      <option value='option2'>{Option2}</option>
      <option value='option3'>{Option3}</option>
      </Select>
    </div>
  )
}
