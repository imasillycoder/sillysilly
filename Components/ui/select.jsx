import React from 'react';
export const Select = ({ children, ...rest }) => (
  <select className="ui-select" {...rest}>{children}</select>
);
export const SelectTrigger = ({ children, ...rest }) => (
  <div className="ui-select-trigger" {...rest}>{children}</div>
);
export const SelectContent = ({ children, ...rest }) => (
  <div className="ui-select-content" {...rest}>{children}</div>
);
export const SelectItem = ({ children, ...rest }) => (
  <div className="ui-select-item" {...rest}>{children}</div>
);
export const SelectValue = ({ children, ...rest }) => (
  <div className="ui-select-value" {...rest}>{children}</div>
);
export default Select;