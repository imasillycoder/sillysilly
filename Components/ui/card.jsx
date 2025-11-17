import React from 'react';
export const Card = ({ children, className = '', ...rest }) => (
  <div className={"ui-card " + className} {...rest}>{children}</div>
);
export const CardHeader = ({ children, className = '', ...rest }) => (
  <div className={"ui-card-header " + className} {...rest}>{children}</div>
);
export const CardContent = ({ children, className = '', ...rest }) => (
  <div className={"ui-card-content " + className} {...rest}>{children}</div>
);
export const CardTitle = ({ children, className = '', ...rest }) => (
  <div className={"ui-card-title " + className} {...rest}>{children}</div>
);
export default Card;