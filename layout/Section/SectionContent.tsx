interface ISectionContentProps {
  data: null | any[];
  noResultsMessage: string;
  children: React.ReactNode;
}

export default function SectionContent({ data, noResultsMessage, children }: ISectionContentProps) {
  return (
    <>
      {/* State: succeeded */}
      {data.length > 0 && children}
      {/* State: no results */}
      {!data?.length && <p>{noResultsMessage}</p>}
    </>
  );
}
