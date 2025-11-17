import React from 'react';
export const AlertDialog = ({ children, ...rest }) => (
  <div className="ui-alert-dialog" {...rest}>{children}</div>
);
export const AlertDialogTrigger = ({ children, ...rest }) => (
  <div className="ui-alert-dialog-trigger" {...rest}>{children}</div>
);
export const AlertDialogContent = ({ children, ...rest }) => (
  <div className="ui-alert-dialog-content" {...rest}>{children}</div>
);
export default AlertDialog;