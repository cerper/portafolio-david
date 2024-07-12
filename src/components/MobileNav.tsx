import { Link as ScrollLink } from 'react-scroll'

const linkData = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'habilidades', target: 'habilidades', offset: -120 },
  { name: 'proyectos', target: 'proyectos', offset: -140 },
  { name: 'contacto', target: 'contacto', offset: -120 },
]
const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {linkData.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            offset={link.offset}
            to={link.target}
            spy
            smooth
            className="cursor-pointer transition-all hover:text-blue-700"
          >
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}
export default MobileNav
