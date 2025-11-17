import React from 'react';
export const Badge = ({ children, className = '', ...rest }) => (
  <span className={"ui-badge " + className} {...rest}>{children}</span>
);
export default Badge;