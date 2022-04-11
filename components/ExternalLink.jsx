const ExternalLink = ({ url, text, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text ? text : children}
    </a>
  );
};

export default ExternalLink;
