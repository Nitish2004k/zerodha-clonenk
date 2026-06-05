import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Unniverse from './Universe'

function ProductPage() {
    return ( 
        <>
        <Hero />
         
        <LeftSection imageURL="media/kite.png"  productName="Kite"  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  tryDemo="Trydemo learn more "  learnMore="" googlePlay=""  appStore=" "/>

         <RightSection imageURL="media/console.png"  productName="Console by Zerodha"  productDescription="The central dashboard for your Zerodha account with in-depth reporting and analytics on your trades and investments."  learnMore="" />

         
         <LeftSection imageURL="media/coin.png"  productName="Coin"  productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."  tryDemo="Trydemo learn more "  learnMore="" googlePlay=""  appStore=" "/>

         
        <RightSection imageURL="media/varsity.png"  productName="Varsity mobile"  productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  learnMore="" />

        <LeftSection imageURL="media/kiteconnect.png"  productName="Kiteconnect"  productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."  tryDemo="Trydemo learn more "  learnMore="" googlePlay=""  appStore=" "/>

        <p className='text-center'>Buy direct mutual funds online commission-free</p>
        
        <Unniverse />
        </>
     );
}

export default ProductPage;