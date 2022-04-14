import React from "react";

interface UnorderedListProps {
  label?: string;
  list: string[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({
  label = "Technologies used:",
  list,
}) => {
  return (
    <>
      {list.length && (
        <>
          <p>{label}</p>
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default UnorderedList;
