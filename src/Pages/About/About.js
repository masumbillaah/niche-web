import React from 'react';
import img1 from '../../images/banner/12 (1).jpg'
import img2 from '../../images/banner/12 (2).jpg'
const About = () => {
    return (
        <div className="" id="about">
        <div className="mt-5 ">
            <h2 className="mb-5 mt-5 text-danger">Our Mission and Vision</h2>
            <div className="row">
                <div className="col-md-6">
                <h4>Vision</h4>
                <img src={img1} alt="" className="w-50" />
            <hr />
            <p>
            Online Watch Shop provides quality products for people concerned about value. We endeavor to create elegant watches with function and utility for daily use. Our design process is guided by a commitment to the lifestyle of the wearer. Since inception, our intention is to offer affordable luxury watches to the consumer.</p></div>
                <div className="col-md-6">
                <h4>Mission</h4>
                <img src={img2} alt="" className="w-50" /> 
                <hr />
                <p>To introduce a broad range of watches and clocks to satisfy all segments of society
To strengthen HMT Brand and create lasting impression on the customer.To provide high quality and trend setting watches that combine performance with value pricing.</p>
                    
                </div>
            </div>
           </div>
        </div>
    );
};

export default About;