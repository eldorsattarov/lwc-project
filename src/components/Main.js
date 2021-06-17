import React from 'react';

const Main = () => {
    return (
        <div className="Main" id="main">
            <div className="container">
                <div className="row">
                   {/*<div className="col-12">*/}
                       <img src="/images/Vector 2.png"/>
                       <span>
                        Lead is a digital innovation studio that leverages best-in-class <br/>
                        strategy, design and development
                    </span>
                       <span className="weRethink">WE RETHINK</span>
                       <br/>
                       <span className="theWeb">THE WEB</span>
                   {/*</div>*/}
                   <div className="absolutMain">
                       <span>Consultation<br/>
                       <img src="/images/Arrow 3.png"/>
                       </span>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Main;