import React from 'react';

function Heroa() {
    return ( 
        <div className='container-fluid' id="supportHeroa">
            <div className=' p-5 ' id="soppoortWrapper">
                <h4>Support Protal</h4>
                <a href=''>Track tickets</a>
               
            </div>
             <div className='row p-5 ' >
                <div className='col-6 p-5  ' >
                    <h1 className='fs-4'>Search for an answer or breowse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&Q'/>
                    <br />
                    <a href=''>Track account opening</a>
                    <a href=''>Track sagment activation</a>
                    <a href=''>Intraday margin</a>
                    <a href=''>Kite user manul</a>
                </div>
                 <div className='col-6 p-5 ' >
                     <h1 className='fs-4'>Featured</h1>
                     <ol>
                        <li> <a href=''>Track sagment activation</a></li>
                        <li><a href=''>Intraday margin</a></li>
                        <li><a href=''>Kite user manul</a></li>

                     </ol>
                    
                 </div>
               
               
            </div>
        </div>
     );
}

export default Heroa;