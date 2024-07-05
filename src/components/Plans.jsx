import React from "react";
import { plansData } from "../data/plansData";
import "./Plans.css";
import whiteTick from '../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plansall">
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>

      <div className="plan-cards">
        {plansData.map((plan) => (
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature)=>(
                <div className="feature">
                  <img src={whiteTick} alt=""/>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
