import React from "react";
import { NewsLetterContainer } from "./style/NewsLetter.styled";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <div className="subscribe">
        <div className="header-text-wrapper">
          <h2>
            <span>Add Impact To Your Inbox</span>{" "}
            <span>Get our emails to stay in the know.</span>
          </h2>
        </div>
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Email Address......"
            className="subscribe-input-email"
          />
          <button type="submit" className="subscribe-btn-submit">
            Get Started
          </button>
        </form>
      </div>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
