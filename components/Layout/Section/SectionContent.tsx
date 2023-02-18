import { Loading } from "@nextui-org/react";

interface SectionContentProps {
  loading: boolean;
  error?: string;
  data: null | any[];
  noResultsMessage: string;
  errorMessage: string;
  children: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({
  loading,
  error,
  data,
  noResultsMessage,
  errorMessage,
  children
}) => {
  return (
    <>
      {/* State: pending */}
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loading />
        </div>
      )}
      {/* State: succeeded */}
      {!loading && !error && children}
      {/* State: no results */}
      {!loading && !error && !data?.length && <p>{noResultsMessage}</p>}
      {/* State: failed */}
      {error && <p>{errorMessage}</p>}
    </>
  );
};

export default SectionContent;
