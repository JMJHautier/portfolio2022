import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import './Next.scss'


const Next = ({section, up = false})=>{

return <Link href={section}> {up?
  <ChevronUpIcon w={20} h={20} className="upIcon" />
  :<ChevronDownIcon w={20} h={20} className="downIcon" />}
  </Link>
}
export default Next       