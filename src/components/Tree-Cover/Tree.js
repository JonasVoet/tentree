import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import './tree.scss';


 const Tree = () => {
    return (
        <section>
            <div className="treesplanted dark-theme">

               <div className="content">
               <img src="//cdn.shopify.com/s/files/1/2404/6643/files/tree.svg?51562" alt="A small tree." />

            
                <h2 className="offset">
                    <span className="tree-count">
                        <CountUp 
                        end={42639672} 
                        redraw={true} 
                        duration={3}
                        separator=","
                        >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    </span>
                </h2>
            
                <p className="offset-0">Trees Planted to Date</p>
                <p className="offset-0">We're planting 1 billion trees by 2030. It's simple:</p>
                <p>tentree keeps you looking good, while you keep the planet looking great.</p>

            </div>
            </div>
            
        </section>
    )
}

export default Tree;
