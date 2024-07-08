import { Link as ScrollLink } from 'react-scroll'

const linkData = [
  { name: 'home', target: 'home', offset: 0 },
  { name: 'habilidades', target: 'habilidades', offset: 0 },
  { name: 'proyectos', target: 'proyectos', offset: 0 },
  { name: 'contacto', target: 'contacto', offset: 0 },
]
const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <div className={`${containerStyles}`}>
      {' '}
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
    </div>
  )
}
export default MobileNav
