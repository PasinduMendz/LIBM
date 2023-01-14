import React from 'react';

// -- Stylesheet -----------------------------------------------------------------------------------

import './Footer.scss';

// -- Component ------------------------------------------------------------------------------------

export default function Footer() {
  // -- Render -----------------------------------------------------------------

  return (
    <footer id="template-footer" className="container-fluid">
      <div className="container">
        <h1>LIBM</h1>
        <h2>
          Connects – people to people, people to place, people to learning.
          <br />
          Cutting libraries in a recession is like cutting hospitals in a plague.
        </h2>
        <h3>Copyright &copy;2022 Boomers. All rights reserved.</h3>
      </div>
    </footer>
  );
}
