import { IoLogoJavascript } from 'react-icons/io'
import { SiReacthookform } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { SiPrisma } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { SiSanity } from 'react-icons/si'
import { SiZod } from 'react-icons/si'
import { SiPostman } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'

const logos = [
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'NextJS',
    icon: <RiNextjsFill />,
  },
  {
    name: 'TailwindCSS',
    icon: <RiTailwindCssFill />,
  },
  {
    name: 'Prisma',
    icon: <SiPrisma />,
  },
  {
    name: 'MongoDB',
    icon: <DiMongodb />,
  },

  {
    name: 'Postman',
    icon: <SiPostman />,
  },
  {
    name: 'NodeJS',
    icon: <FaNodeJs />,
  },
  {
    name: 'Express',
    icon: <SiExpress />,
  },
]
const logo2 = [
  {
    name: 'Zod',
    icon: <SiZod />,
  },
  {
    name: 'React-Hook-Form',
    icon: <SiReacthookform />,
  },
  {
    name: 'Sanity',
    icon: <SiSanity />,
  },
]

const SkillsSection = () => {
  return (
    <div id="habilidades">
      <div className="flex flex-col justify-center items-center">
        <h3 className="uppercase text-5xl font-oswald mt-8">mis habilidades</h3>
        <div className="grid-cols-2 mx-auto grid lg:grid-cols-3 mt-16 text-center place-content-center place-items-center gap-8  w-full">
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-4xl "
              >
                {logo.icon}
                <div className="text-2xl font-oswald">{logo.name}</div>
              </div>
            )
          })}
        </div>
        <div className="w-[410px] lg:w-[800px]  grid-cols-3 grid lg:grid-cols-3 mt-16 gap-8 lg:gap-28">
          {logo2.map((logos, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full items-center justify-center text-4xl "
              >
                {logos.icon}
                <div className="text-lg font-oswald">{logos.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default SkillsSection
