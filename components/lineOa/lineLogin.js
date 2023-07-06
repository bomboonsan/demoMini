import { useEffect } from 'react';
import Head from 'next/head';
import liff from '@line/liff';

const LineLogin = () => {
    
  useEffect(() => {
    const loginWithLine = async () => {
      const liffUrl = 'YOUR_LIFF_URL';
      const liffId = 'YOUR_LIFF_ID';
      const lineOAUrl = 'YOUR_LINE_OA_FRIEND_URL';

      await liff.init({ liffId });
      
      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        const userId = profile.userId;

        try {
          const isFriend = await liff.isFriend(liff.getOS(), userId);

          if (isFriend) {
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

  return (
    <div>
      <Head>
        <title>LINE Login</title>
      </Head>
    </div>
  );
};

export default LineLogin;