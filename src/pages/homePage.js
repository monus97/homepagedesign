import React from "react";

function HomePage() {
  return (
    <div>
      <div className="upper_div">
        <div className="head">
          The Price Experimentation Platform for SaaS Companies
        </div>
        <div className="link">
        <a href="#faq" target="#faq">Join our beta!</a>
        </div>
        <div>
          <ul className="ul">
            <li className="li">
              Stop guessing at your pricing strategy. Use pricing science.
            </li>
            <li className="li">
              Not sure which packages/plans to create? How to price a new
              product? Which metric is going to <br /> drive upsells and revenue
              expansion?
            </li>
            <li className="li">
              Before Accrue, you had to either rely on guessing, or hiring a
              consultant. No longer.
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="work">
          <div>How does Accrue work?</div>
        </div>
        <div className="content">
          <div className="boxes">
            <div className="box">
              <p className="p_tag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="box">
              <img
                className="first_img"
                src="https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/about-classic1.jpg"
              />
            </div>
          </div>
          <div className="boxes">
            <div className="boxs">
              <img
                className="image"
                src="https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/about-classic2.jpg"
              />
              <img
                className="image"
                src="https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/about-classic1.jpg"
              />
            </div>
            <div className="second">
              <div className="box">
                <p className="p_tag">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <p className="p_tag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="box">
              <img
                className="first_img"
                src="https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/about-classic2.jpg"
              />
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <img
                className="first_img"
                src="https://www.leadengine-wp.com/static/wp-content/uploads/sites/37/2018/02/about-classic2.jpg"
              />
            </div>
            <div className="box">
              <p className="p_tag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="beta">Join our Beta!</div>
        </div>
        <div className="faq" id="faq">
          FAQ
        </div>
        <div
          style={{ margin: "3px 0px 91px 0px" }}
          className="accordion"
          id="accordionExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: "#ede9e9"}}
              >
                How long does this take to set up?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong> We handle all onboarding -</strong> all you have to do
                is book a call We integrate with your subscription billing
                system Import your pricing model
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How much traffic is needed to be statistically significant?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  {" "}
                  Will this work with my page? I have XYZ integrations.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                I could use some additional support on the pricing strategy
                side. Can you support me?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What happens if my customers notice two different pricing
                options? Won’t they complain?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
