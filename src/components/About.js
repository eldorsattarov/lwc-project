import React from 'react';

const About = () => {
    return (
        <div className="main" id="about">
            <div className="vertical"></div>
            {/*<div className="line position-absolute mt-5"></div>*/}
           <div className="row mt-5">
               <div className="col-12 mt-5">
               <h1 className="text-white font-weight-normal mt-5">WANT A UNIQUE DESIGN?<br/>
               WE WILL HELP YOU!
               </h1>
               </div>
               <div className="col-5">
                   <p className="mt-4 text-white">
                       Lorem ipsum dolor sit amet, consectetur<br/>
                       adipiscing elit, sed do eiusmod tempor<br/>
                       incididunt ut labore et dolore magna aliqua.<br/>
                       Ut enim ad minim veniam, quis nostrud <br/>
                       exercitation ullamco laboris nisi ut aliquip ex <br/>
                       ea commodo consequat. Duis aute irure <br/>
                       dolor in reprehenderit in voluptate Lorem<br/>
                       ipsum dolor sit amet, consectetur adipiscing<br/>
                       elit, sed do eiusmod tempor incididunt ut <br/>
                       labore et dolore magna aliqua. Ut enim ad <br/>
                       minim veniam, quis nostrud exercitation<br/>
                       ullamco laboris nisi ut aliquip ex ea<br/>
                       commodo consequat. Duis aute irure dolor in <br/>
                       reprehenderit in voluptate
                   </p>
               </div>
               <div className="col-4">
                   <p className="text-white aboutP position-absolute">
                       Lorem ipsum dolor sit amet, consectetur<br/>
                       adipiscing elit, sed do eiusmod tempor<br/>
                       incididunt ut labore et dolore magna aliqua.<br/>
                       Ut enim ad minim veniam, quis nostrud <br/>
                       exercitation ullamco laboris nisi ut aliquip ex <br/>
                       ea commodo consequat. Duis aute irure <br/>
                       dolor in reprehenderit in voluptate
                   </p>
               </div>
               <div className="col-3">
                   <div className="aboutStart">
                       <span>START <br/>PROJECT
                       <br/>
                        <img src="/images/Arrow 3.png"/>
                       </span>

                   </div>
               </div>
           </div>


        </div>
    );
};

export default About;