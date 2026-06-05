import React from 'react';

function Pricing() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 mb-4 mb-md-0">
                    <h2 className="mb-3">Unbeatable pricing</h2>
                    <p>We pioneered discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' style={{ textDecoration: "none" }}>See Pricing →</a>
                </div>
                <div className="col-12 col-md-7">
                    <div className="row text-center g-3">
                        <div className="col-6">
                            <div className="border rounded p-4">
                                <h1 className="display-4 fw-bold text-primary">0</h1>
                                <p className="mb-0">Free equity delivery and direct mutual funds</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border rounded p-4">
                                <h1 className="display-4 fw-bold text-primary">₹20</h1>
                                <p className="mb-0">Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;






// import React from 'react';

// function Pricing() {
//     return ( 
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-4'>
//                     <h1 className='mb-3'>Unbeatable pricing</h1>
//                     <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
//                     <a href='/' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
//                     <img src='' />
//                 </div>
//                 <div className='col-2'></div>
//                 <div className='col-6'>
//                     <div className='row text-center'>
//                         <div className='col p-2 border'>
//                             <h1>0</h1>
//                             <p>Free equity delivery
// and <br></br>direct mutual funds</p>
//                         </div>
//                         <div className='col p-2 border'>
//                             <h1>20</h1>
//                             <p>Intraday and
// F&O</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
           
//         </div>
//      );
// }

// export default Pricing;
