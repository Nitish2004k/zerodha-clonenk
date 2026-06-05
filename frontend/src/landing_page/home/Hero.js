import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container py-5">
            <div className="row text-center justify-content-center">
                <div className="col-12 col-md-10">
                    <img src="media/homeHero.png" alt="Hero Image" className="img-fluid mb-4" />
                    <h1 className="mt-4 mb-3">Invest in everything</h1>
                    <p className="mb-4">Online platform to invest in stocks, derivatives, mutual funds</p>
                    <Link to="/signup">
                        <button className="btn btn-primary px-4 py-2 fs-5">Signup Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;



// import React from 'react';

// function Hero() {
//     return(
//         <div className="container p-5 mb-5">
//             <div className="row text-center" >
//                 <img src="media/homeHero.png" alt="Hero Image"  className='mb-5'/>
//                 <h1 className='mt-5'>Invest in everything</h1>
//                 <p>Online platfrom to invest everthing in stocks, dervatives, mutul funds</p>
//                 <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%" ,margin:"0 auto"}}>Signup Now</button>

//             </div>
              
//         </div>
//     );
// }

// export default Hero;
