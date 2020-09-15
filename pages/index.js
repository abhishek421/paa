import Desktop from "./desktop/home";
import Mobile from "./mobile/home";
import {useEffect,useState} from 'react';
import Head from 'next/head'


function Home() {
  const [device, setDevice] = useState(0);
  useEffect(() => {
    if (screen.width<700) {
      setDevice(2)
    }
    else{
      setDevice(1)
    }
  });
  
  return (
                <div>
                  <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                  </Head>
                  {  device==2?
                  <Mobile /> 
                  :
                  <Desktop />
                  }
                </div>
                
  )
}

export default Home
