import React from 'react';
export const Label = ({ children, className = '', ...rest }) => (
  <label className={"ui-label " + className} {...rest}>{children}</label>
);
export default Label;