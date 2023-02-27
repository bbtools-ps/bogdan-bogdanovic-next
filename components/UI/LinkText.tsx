import Link from "next/link";

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = ({ href, children }) => {
  return (
    <Link href={href || ""} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default LinkText;
