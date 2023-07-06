import { useEffect } from 'react';
import Head from 'next/head';
import liff from '@line/liff';

const LineLogin = () => {

  useEffect(() => {
    const loginWithLine = async () => {
      const liffUrl = 'https://liff.line.me/2000001237-XG1RrrYn';
      const liffId = '2000001237-XG1RrrYn';
      const lineOAUrl = 'https://lin.ee/jNXQe85';

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