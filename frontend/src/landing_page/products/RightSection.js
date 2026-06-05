import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 order-2 order-md-1'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <a href={learnMore}>Learn More</a>
                </div>
                <div className='col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center'>
                    <img src={imageURL} className='img-fluid' alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;






// import React from 'react';

// function RightSection({imageURL, productName, productDescription, learnMore}) {
//     return ( 
//          <div className='container mt-5'>
//             <div className='row '>
//                  <div className='col-6 p-5 mt-5'>
//                     <h1>{productName}</h1>
//                     <p>{productDescription}</p>
//                     <div className=''>
                       
//                         <a href={learnMore} >learnMore</a>
//                     </div>
                   
//                 </div>
//                 <div className='col-6 '>
//                     <img src={imageURL} className=''/>
//                 </div>
               
//             </div>

//         </div>
       
//      );
// }

// export default RightSection;
