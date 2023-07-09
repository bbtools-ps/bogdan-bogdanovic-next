interface ISectionContentProps {
  data: null | any[];
  noResultsMessage: string;
  children: React.ReactNode;
}

const SectionContent: React.FC<ISectionContentProps> = ({ data, noResultsMessage, children }) => {
  return (
    <>
      {/* State: succeeded */}
      {data.length > 0 && children}
      {/* State: no results */}
      {!data?.length && <p>{noResultsMessage}</p>}
    </>
  );
};

export default SectionContent;
