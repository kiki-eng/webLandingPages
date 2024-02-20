import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3>Tracking And Audit Proofing Your Real Estate Professional Hours Has Never Been Easier,</h3>
                <h4>Get Peace Of Mind.</h4>
                <p>Ready to stop struggling with REPS? my750hrstracker is here to empower and elevate your real estate game.</p>
                <button type="button" className="btn btn-custom btn-lg">
                Get started
                </button>
                <p>Join 1,500+ users in minimizing risk, saving time and maximizing profits</p>
              </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/intro-bg.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h1>Why use my750hrstracker as your real estate professional management tracker</h1>
                <p>Qualifying as a real estate professional is an exception to the rule of IRC sec 469, which says “All Rental Activities are considered “per se” passive. It is therefore a highly audited area on investors tax returns. These are a few reasons and benefits of using our App.</p>
              </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/home-img-1.png" className="img-responsive" alt="" />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div style={{display:'flex'}}>
              <div className="icons"></div>
              <p style={{width:'60%'}}>User-friendly interface - Our app is designed to be easy to use and navigate, even for users with limited technical expertise.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div style={{display:'flex'}}>
              <div className="icons"></div>
              <p style={{width:'60%'}}>Get the peace of mind of knowing your real estate professional hour will be audit proof if the IRS audits you</p>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:-60}}>
          <div className="col-xs-12 col-md-6">
            <div style={{display:'flex'}}>
              <div className="icons"></div>
              <p style={{width:'60%'}}>Remove the uncertainty of taking risky tax positions know whether or not you qualify as a real estate professional</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div style={{display:'flex'}}>
              <div className="icons"></div>
              <p style={{width:'60%'}}>Intuitive hour and activity tracking. Say goodbye to tedious spreadsheets and manual data entry. 750hrs makes tracking your REPS hours and activities effortless, ensuring you always meet IRS requirements.</p>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:-60}}>
          <div className="col-xs-12 col-md-6">
            <div style={{display:'flex'}}>
              <div className="icons"></div>
              <p style={{width:'60%'}}>Expert guidance and support: Have a question about REPS? No problem. Our team of experts is always available to provide you with the guidance and support you need.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div style={{display:'flex'}}>
              <div className="icons"></div>
              <p style={{width:'60%'}}>Cloud-based accessibility: Access your data from anywhere, anytime. 750hrs is available on all devices, allowing you to stay connected and productive on the go.</p>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-custom btn-lg">
          Get started
        </button>
      </div>
    </div>
  );
};
