import React from 'react';
export const Button = ({ children, className = '', ...rest }) => (
  <button className={"ui-button " + className} {...rest}>{children}</button>
);
export default Button;