const UnorderedList = ({ name = "Technologies used:", list }) => {
  return (
    <>
      {list.length && (
        <>
          <p>{name}</p>
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
