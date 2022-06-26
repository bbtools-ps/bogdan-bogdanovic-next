import React from "react";
import HeaderMenu from "./HeaderMenu";

interface HeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, description }) => {
  return (
    <header>
      <HeaderMenu />
      <div className="content-wrap">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default Header;
