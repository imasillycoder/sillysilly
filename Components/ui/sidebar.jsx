import React from 'react';
export const SidebarProvider = ({ children }) => <div className="sidebar-provider">{children}</div>;
export const Sidebar = ({ children, className = '', ...rest }) => (
  <aside className={"sidebar " + className} {...rest}>{children}</aside>
);
export const SidebarContent = ({ children, ...rest }) => <div className="sidebar-content" {...rest}>{children}</div>;
export const SidebarGroup = ({ children, ...rest }) => <div className="sidebar-group" {...rest}>{children}</div>;
export const SidebarGroupContent = ({ children, ...rest }) => <div className="sidebar-group-content" {...rest}>{children}</div>;
export const SidebarGroupLabel = ({ children, ...rest }) => <div className="sidebar-group-label" {...rest}>{children}</div>;
export const SidebarMenu = ({ children, ...rest }) => <nav className="sidebar-menu" {...rest}>{children}</nav>;
export const SidebarMenuButton = ({ children, ...rest }) => <button className="sidebar-menu-button" {...rest}>{children}</button>;
export const SidebarMenuItem = ({ children, ...rest }) => <div className="sidebar-menu-item" {...rest}>{children}</div>;
export const SidebarHeader = ({ children, ...rest }) => <div className="sidebar-header" {...rest}>{children}</div>;
export const SidebarFooter = ({ children, ...rest }) => <div className="sidebar-footer" {...rest}>{children}</div>;
export const SidebarTrigger = ({ children, ...rest }) => <button className="sidebar-trigger" {...rest}>{children}</button>;

export default Sidebar;