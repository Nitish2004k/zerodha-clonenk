import React from 'react';

function Awards() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                    <img src='media/largestBroker.svg' className="img-fluid" alt="largest broker" />
                </div>
                <div className="col-12 col-md-6">
                    <h2>Largest stock broker in India</h2>
                    <p className="mb-4">2 million+ Zerodha clients contribute to over 15% of all India volumes in daily trading.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures & Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt. securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' className="img-fluid" alt="press logos" />
                </div>
            </div>
        </div>
    );
}

export default Awards;





// import React from 'react';

// function Awards() {
//     return ( 
//         <div className='container mt-5'>   
//             <div className='row'>
//                 <div className='col-6 p-5'>
//                     <img src='media/largestBroker.svg' />
//                 </div>
//                 <div className='col-6 p-5 mt-4'>
//                     <h1>Largest stock broker in India</h1>
//                     <p className='mb-5'>+2 million Zerodha client contribute to over the
//                          15% of all India volumes in India daily trading and investing in:</p>
//                          <div className='row'>
//                             <div className='col-6'>
//                                  <ul>
//                            <li>
//                                 < p>Feature and Option</p>
//                             </li>
//                              <li>
//                                 < p>commodity derivatives</p>
//                             </li>
//                              <li>
//                                 < p>corrency derivatives</p>
//                             </li>
//                          </ul>
//                             </div>
//                             <div className='col-6'>
//                                  <ul>
//                            <li>
//                                 < p>stocks & IPOs</p>
//                             </li>
//                              <li>
//                                 < p>Direct  mutul funds</p>
//                             </li>
//                              <li>
//                                 < p>Bonds and Govt. securities</p>
//                             </li>
//                          </ul>
//                             </div>
//                          </div>
//                         <img src='media/pressLogos.png' style={{width:"90%"}}/>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Awards;
