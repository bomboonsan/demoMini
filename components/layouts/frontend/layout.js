import Image from 'next/image'
import Link from 'next/link'



export default function RootLayout({ children }) {
  return (
    <div className='shadow-lg min-h-screen bg-[#5CE1E6] mx-auto max-w-[450px] p-5'>
      <div className='text-center mb-5'>
        <h1 className='text-white text-3xl font-[700]'>
          <Link href={'/'}>
            KTAM
          </Link>
        </h1>

      </div>
      <div>

        {children}

      </div>
    </div>
  )
}
