import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/proyecto-david/logo-david.jpg'
const AdminNav = () => {
  return (
    <div className="  top-0 z-50 mt-8 flex h-[100px] w-full max-w-[1920px] items-center justify-center bg-white transition-all">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={logo}
          alt="logo de la empresa"
          width={100}
          height={50}
          className="mb-16"
        />
      </Link>{' '}
    </div>
  )
}

export default AdminNav
