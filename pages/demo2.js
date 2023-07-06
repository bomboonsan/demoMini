import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import Layout from '../components/layouts/frontend/layout'

import { useEffect, useState, useRef } from 'react';


export default function Demo1() {

  const [step, setStep] = useState(0);
  const [indexResult, setIndexResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let listAnswers = [
    {
      'imageUrl': '/images/2.jpg',
      'text': 'หวังอี้ป๋อ (Wang Yibo) หน้าตาหล่อ เท่โดนใจ ถึงจะดูเย็นชาไปหน่อย แต่ดูแลเธอได้นะ'
    },
    {
      'imageUrl': '/images/3.jpg',
      'text': 'เซียวจ้าน (Xiao  Zhan) หนุ่มหล่อ ผู้มีรอยยิ้มพิฆาต ยิ้มทีโลกสดใส ใครเห็นเป็นต้องตะลึง '
    },
    {
      'imageUrl': '/images/4.jpg',
      'text': 'หยาง หยาง (Yang Yang) หล่อ เท่โดนใจ มีความสุขุม ไม่ขี้หงุดหงิด มองโลกในแง่ดี      '
    },
    {
      'imageUrl': '/images/5.jpg',
      'text': 'เฮนรี คาวิลล์ (Henry Cavill) หนุ่มซูเปอร์แมนสุดหล่อ หุ่นแซ่บที่จะทำให้คุณใจละลาย'
    },
    {
      'imageUrl': '/images/6.jpg',
      'text': 'คริส เฮมส์เวิร์ธ (Chris Hemsworth) หนุ่มหล่อ นิสัยน่ารัก สร้างรอยยิ้มและเสียงหัวเราะให้กับคุณได้'
    },
  ]
  
  const handleStart = () => {
    const randomIndexAnswer = Math.floor(Math.random() * listAnswers.length);
    console.log(randomIndexAnswer)

    setIsLoading(true)

    setTimeout(() => { 
      setStep(1)
      setIndexResult(randomIndexAnswer)
      setIsLoading(false)
    }, 1000)
  }

  const handleReStart = () => {
    setStep(0)
    setIndexResult(0)
  }

  // Component
  const ResultEle = ( { imageUrl , text } ) => {
    return (
      <div className='block mx-auto w-[80%]'>
        <h2 className='text-center text-2xl font-bold mb-5'>
          อีก 5 ปีคุณจะเป็น...
        </h2>
        <figure className=''>
          <img className='rounded-xl shadow-lg' src={imageUrl} alt="" />
        </figure>
        <p className='text-center text-xl font-[500] mt-5'>{text}</p>
        <div className='text-center mt-10'>
          <button className="btn btn-secondary text-xl" onClick={handleReStart}>เล่นอีกครั้ง</button>
        </div>
      </div>
    )
  }

  const Loading = () => {
    return (
      <div className='flex flex-wrap justify-center items-center min-h-[75vh]'>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Demo Game 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && 
      <Loading />
      }

      {!isLoading && step == 0 &&
      (
        <div>
          <h1 className='text-center text-2xl font-bold mb-10'>
          ผู้ชายสไตล์ไหน คือเนื้อคู่ของคุณ
          </h1>
          <figure className='block mx-auto w-[80%]'>
              <img className='rounded-xl shadow-lg' src="/images/2.jpg" alt="" />
          </figure>
          <div className='text-center mt-10'>
            <button className="btn btn-secondary text-xl" onClick={handleStart}>เล่นเกม</button>
          </div>
        </div>
      )}

      {!isLoading && step == 1 &&
      (
        <div>
          <ResultEle imageUrl={listAnswers[indexResult].imageUrl} text={listAnswers[indexResult].text} />
        </div>
      )}
    </Layout>
  )
}
