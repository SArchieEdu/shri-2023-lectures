"use client";

import { useState } from "react";

const Layout = ({
  renderHeader,
  renderFooter,
  renderMainContent,
  renderSidebarLeft,
  renderSidebarRight,
}) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <header className="header">{renderHeader?.()}</header>
      <button onClick={() => setIsOpen(!isOpen)}>ClickMe!</button>
      <div>
        <div className="sidebarLeft">{renderSidebarLeft?.(isOpen)}</div>
        <div className="mainContent">{renderMainContent?.()}</div>
        <div className="sidebarRight">{renderSidebarRight?.(isOpen)}</div>
      </div>
      <footer className="footer">{renderFooter?.()}</footer>
    </div>
  );
};

export default function RenderProp() {
  return (
    <Layout
      renderHeader={() => <header>header</header>}
      renderMainContent={() => <div>MainContent</div>}
      renderFooter={() => <footer>footer</footer>}
      renderSidebarLeft={(isOpen) => <div>{isOpen ? "Open" : "Closed"}</div>}
    />
  );
}
