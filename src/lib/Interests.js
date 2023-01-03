import { MdOutlineMobileFriendly } from 'react-icons/md'
import { BiCodeAlt } from 'react-icons/bi'
import { RiOpenSourceLine } from 'react-icons/ri'
import { TbWriting } from 'react-icons/tb'

export const interests = [
  {
    icon: <MdOutlineMobileFriendly />,
    title: 'Responsive Design',
    text: `I am passionate about creating 
    websites that are easy to use on
    a variety of devices and web browsers
    by using both the "mobile first"
    approach and "CSS media queries".`,
  },
  {
    icon: <BiCodeAlt />,
    title: 'Minimal / Reusable Code',
    text: `I try to keep my code as simple as
    possible in order to improve maintainability,
    efficiency, and readability.`,
  },
  {
    icon: <RiOpenSourceLine />,
    title: 'Open Source',
    text: `Using open source tools and frameworks allow
    me to save time and resources by utilizing the efforts of
    others who have already developed and tested them.`,
  },
  {
    icon: <TbWriting />,
    title: 'Technical Writing',
    text: `I am interested in clearly and accurately 
    communicating technical information to a variety
    of audiences, including clients, team members and
    end users of products that i build.`,
  },
]
