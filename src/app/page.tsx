import React from 'react';
import Header from '@/app/components/Header';
import Main from '@/app/components/Main';
import Footer from '@/app/components/Footer';

export default function Home(): React.JSX.Element {
  return <React.Fragment>
    <Header/>
    <Main/>
    <Footer/>
  </React.Fragment>;
}
