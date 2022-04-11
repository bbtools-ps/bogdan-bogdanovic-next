const Header = ({ title, subtitle, description }) => {
  return (
    <header>
      <div className="content-wrap">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default Header;
