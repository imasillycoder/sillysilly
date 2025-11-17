import React from 'react';
export const Dialog = ({ children, ...rest }) => (
  <div className="ui-dialog" {...rest}>{children}</div>
);
export const DialogTrigger = ({ children, ...rest }) => (
  <div className="ui-dialog-trigger" {...rest}>{children}</div>
);
export const DialogContent = ({ children, ...rest }) => (
  <div className="ui-dialog-content" {...rest}>{children}</div>
);
export const DialogHeader = ({ children, ...rest }) => (
  <div className="ui-dialog-header" {...rest}>{children}</div>
);
export const DialogFooter = ({ children, ...rest }) => (
  <div className="ui-dialog-footer" {...rest}>{children}</div>
);
export default Dialog;