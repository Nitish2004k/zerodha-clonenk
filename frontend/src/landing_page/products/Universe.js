import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1 className='text-center'>The Zerodha Universe</h1>
                <p className='text-center mb-6 '>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 '>
                    <img src="media/smallcaseLogo.png" className='' />
                    <p className='text-small text-muted'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/zerodhaFundhouse.png" style={{width:"95px"}} />
                    <p className='text-small text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/sensibullLogo.svg" className='' />
                    <p className='text-small text-muted'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/sensibullLogo.svg"  style={{width:"80px"}} />
                    <p className='text-small text-muted'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                 <div className='col-4 p-3'>
                    <img src="media/streakLogo.png"  style={{width:"80px"}} />
                    <p className='text-small text-muted'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                 <div className='col-4 p-3'>
                    <img src="media/dittoLogo.png"  style={{width:"80px"}} />
                    <p className='text-small text-muted'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%" ,margin:"0 auto"}}>Signup Now</button>

               
            </div>

        </div>
    );
}

export default Universe;
