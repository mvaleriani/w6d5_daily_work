import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  console.log(root);
  ReactDOM.render(<Clock/>, root);
  ReactDOM.render(<Tabs/>, root);

});
