# Navbar Opacity Hook

A custom React hook to adjust the opacity of a navbar based on scroll position.

## Installation

To install the package, run the following command:

```bash
npm install navbar-opacity-hook

Usage

First, import the useNavbarOpacity hook into your desired component:

import React from 'react';
import useNavbarOpacity from 'navbar-opacity-hook';

const Navbar = () => {
  // Use the hook with optional configuration
  const opacity = useNavbarOpacity({ maxOpacity: 1, minOpacity: 0, increaseOpacityOnScrollUp: true });

  // Apply the opacity value to your navbar styles
  const navbarStyle = {
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navbarStyle}>
      {/* Your navbar content here */}
    </nav>
  );
};

export default Navbar;


Configuration Options

The useNavbarOpacity hook accepts an optional configuration object with the following properties:

    maxOpacity (number, default: 1): The maximum opacity value when the user scrolls.
    minOpacity (number, default: 0): The minimum opacity value when the user is at the top of the page.
    increaseOpacityOnScrollUp (boolean, default: false): If true, the opacity will increase when scrolling up; otherwise, it will increase when scrolling down.

Example

import React from 'react';
import useNavbarOpacity from 'navbar-opacity-hook';

const Navbar = () => {
  const opacity = useNavbarOpacity({ maxOpacity: 0.8, minOpacity: 0.2, increaseOpacityOnScrollUp: false });

  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navbarStyle}>
      <h1>My Website</h1>
    </nav>
  );
};

export default Navbar;

In this example, the navbar will have an opacity of 0.2 at the top of the page and will increase to 0.8 as the user scrolls down.
License

ISC
