import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './Subscribe.css';

function Subscribe() {
  const [user] = useAuthState(auth); // To check if user is logged in
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // To track user's subscription
  const navigate = useNavigate();

  // Simulate checking the user's subscription status (e.g., through Firestore or a back-end service)
  useEffect(() => {
    if (user) {
      // Placeholder: Simulate a subscription check
      setSubscriptionStatus("Pro Plan"); // In practice, check from Firestore or your back-end.
    }
  }, [user]);

  // Plan details
  const plans = [
    { name: "Basic", price: "$10/month", features: ["Access to basic workouts", "Basic progress tracker"] },
    { name: "Pro", price: "$20/month", features: ["Access to all workouts", "Personalized progress tracker", "Nutrition plans"] },
    { name: "Premium", price: "$30/month", features: ["Access to all workouts", "Personalized progress tracker", "Nutrition plans", "1-on-1 training sessions"] }
  ];

  const handleSubscribe = (plan) => {
    if (!user) {
      alert("You must be logged in to subscribe.");
      navigate("/login"); // Redirect to login page if not logged in
      return;
    }

    // Handle the subscription process here (e.g., call API, integrate payment)
    alert(`Subscribed to the ${plan.name} plan!`);
    // In a real app, you would handle payments and update the subscription status in Firestore
  };

  return (
    <div className="subscribe-container">
      <header className="header">
        <h2>Choose Your Subscription Plan</h2>
      </header>

      <section className="subscription-status">
        {user && subscriptionStatus ? (
          <p>You're currently subscribed to the <strong>{subscriptionStatus}</strong> plan.</p>
        ) : (
          <p>You are not currently subscribed to any plan.</p>
        )}
      </section>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handleSubscribe(plan)} className="subscribe-btn">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscribe;
