import { Link, Routes, Route } from "react-router-dom";
import ScreenB1 from "./ScreenB1";
import ScreenB2 from "./ScreenB2";
import React, { useState } from "react";

// State to track if dropdown is open or closed

const ScreenB = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown state
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2>Agent Side</h2>
      {/* <nav>
        <Link to="B1">Sub Screen B1</Link> | <Link to="B2">Sub Screen B2</Link>
      </nav>
      <Routes>
        <Route path="B1" element={<ScreenB1 />} />
        <Route path="B2" element={<ScreenB2 />} />
      </Routes> */}
      <div className="client">
        <div className="dropdown-container">
            <div className="name">
                <h2>
                    Name
                </h2>
            </div>
            <div className="email">
                <p>email</p>
            </div>
          {/* Button to toggle dropdown */}
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <span>{isOpen ? "▼" : "►"}</span> {/* Arrow changes direction */}
            Click to see more
          </button>

          {/* Conditionally render the content */}
          {isOpen && (
            <div className="dropdown-content">
              <p>This is the content that appears when the dropdown is open.</p>
            </div>
          )}
        </div>
        <div className="text_to_customer">
          <p>
            In this post, I'll share some of the most beautiful simple website
            examples I’ve found on the internet to inspire you as you craft
            yours. And when you want to get started building your own simple
            website, give HubSpot's Free Website Builder a try to craft your
            site. The drag-and-drop builder comes with free themes, templates,
            and more.
          </p>
        </div>
        <div className="footer">
        <button className="send">Send</button>
        </div>
        
      </div>
    </div>
  );
};

export default ScreenB;
