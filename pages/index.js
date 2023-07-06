import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import Layout from '../components/layouts/frontend/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href={'/demo1'}>
        <div className="card card-side bg-[#FDF3CF] shadow-lg hover:shadow-xl p-1">
          <figure className='w-1/4'>
            <img className='rounded-xl' src="/images/1.jpg" alt="Movie" />
          </figure>
          <div className="card-body py-2 px-4 w-3/4">
            <h2 className="card-title text-base text-[#4B3B34]">อีก 5 ปีคุณจะเป็นยังไง?</h2>
          </div>
        </div>
        </Link>

        <Link href={'/demo2'}>
        <div className="card card-side bg-[#FDF3CF] shadow-lg hover:shadow-xl p-1">
          <figure className='w-1/4'>
            <img className='rounded-xl' src="/images/2.jpg" alt="Movie" />
          </figure>
          <div className="card-body py-2 px-4 w-3/4">
            <h2 className="card-title text-base text-[#4B3B34]">ผู้ชายสไตล์ไหน คือเนื้อคู่ของคุณ</h2>
          </div>
        </div>
        </Link>

      </div>
    </Layout>
  )
}
