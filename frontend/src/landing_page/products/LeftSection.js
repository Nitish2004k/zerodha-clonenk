import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 mb-4 mb-md-0 text-center'>
                    <img src={imageURL} className='img-fluid' alt={productName} />
                </div>
                <div className='col-12 col-md-6'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div className='d-flex gap-4 mb-3'>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore}>Learn More</a>
                    </div>
                    <div className='d-flex flex-wrap gap-3'>
                        <a href={googlePlay}><img src='media/googlePlayBadge.svg' alt="Google Play" style={{ height: "40px" }} /></a>
                        <a href={appStore}><img src='media/appstoreBadge.svg' alt="App Store" style={{ height: "40px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;






// import React from 'react';

// function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore ,googlePlay,  appStore }) {
//     return (
//         <div className='container mt-5'>
//             <div className='row '>
//                 <div className='col-6 '>
//                     <img src={imageURL} className=''/>
//                 </div>
//                 <div className='col-6 p-5 mt-5'>
//                     <h1>{productName}</h1>
//                     <p>{productDescription}</p>
//                     <div className=''>
//                         <a href={tryDemo}>TryDemo</a>
//                         <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
//                     </div>
//                    <div className='mt-3'>
//                      <a href={googlePlay}><img src='media/googlePlayBadge.svg'/></a>
//                     <a href={appStore}><img src='media/appstoreBadge.svg' style={{marginLeft:"50px"}}/></a>
//                    </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default LeftSection;
