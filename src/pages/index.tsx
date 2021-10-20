import React from 'react';
import Head from 'next/head';




const Home:React.FC = () =>{

  return(

    <div className={'container'}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Ola mundo</h1>

      </main>
    </div>

  )
}


export default Home;
