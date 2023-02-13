import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = ({ href, children }) => {
  return (
    <Link href={href || ""} passHref>
      <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
};

export default LinkText;
