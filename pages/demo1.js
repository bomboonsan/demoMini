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
      'text': 'มหาเศรษฐีตัวจริงอยู่นี่ไง'
    },
    {
      'imageUrl': '/images/3.jpg',
      'text': 'มีครอบครัวที่น่ารัก '
    },
    {
      'imageUrl': '/images/4.jpg',
      'text': 'สายเปย์ตัวจริง เพราะฉันรวยมากกก'
    },
    {
      'imageUrl': '/images/5.jpg',
      'text': 'โดนหวยแดก อีกแล้ววว '
    },
    {
      'imageUrl': '/images/6.jpg',
      'text': 'เปิดหม้อไม่มี ไม่มีข้าวสุก หันมาเปิด กระปุก ไม่มี ไม่มีข้าวสาร มานั่งจนจ๋อ จนจ๋อขอทาน ช่างน่าสงสารเอ๊ยเวทนา '
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
            อีก 5 ปีคุณจะเป็นยังไง?
          </h1>
          <figure className='block mx-auto w-[80%]'>
              <img className='rounded-xl shadow-lg' src="/images/1.jpg" alt="" />
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
