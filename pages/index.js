import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import axios from 'axios';
import Layout from '../components/layouts/frontend/layout'

const inter = Inter({ subsets: ['latin'] })

import { useEffect, useState, useRef } from 'react';

import liff from '@line/liff';

export default function Home() {

  useEffect(() => {
    const loginWithLine = async () => {
      const liffUrl = 'https://liff.line.me/2000001237-XG1RrrYn';
      const liffId = '2000001237-XG1RrrYn';
      const lineOAUrl = 'https://lin.ee/jNXQe85';

      await liff.init({ liffId });
      
      if (liff.isLoggedIn()) {
        try {
          const profile = await liff.getProfile();
          const userId = profile.userId;

          console.log('userId: '+userId)

          const friendshipStatus = await checkFriendshipStatus(userId);
          
          console.log(friendshipStatus)

          if (friendshipStatus) {
            window.location.href = liffUrl;
          } else {
            liff.openWindow({
              url: lineOAUrl,
              external: true,
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        liff.login();
      }
    };

    loginWithLine();
  }, []);



  const checkFriendshipStatus = async (userId) => {
    try {
      const response = await axios.get(
        `https://api.line.me/v2/bot/friendship/${userId}/status`,
        {
          headers: {
            'Authorization': `Bearer PjpuUdB71ZjPZ+00yFlejowc1Su1J47TSBlq1IK9jfKC53u7gTCkw35r4/v5zex7gbVSwBwEVbSmPBiYsDL8iNMllhH3Rq60ChdUNuYpL9KyJCbVXQRN073Bxs5GLYswsmUnbIZx1/PmBnFNGSBdmwdB04t89/1O/w1cDnyilFU=`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        return data.friendFlag === 1;
      } else {
        throw new Error('Failed to check friendship status');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Failed to check friendship status');
    }
  };



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
