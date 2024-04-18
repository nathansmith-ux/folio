import JournalCard from "./JournalCard";

interface Url {
  value: string;
}

interface IndividualRecord {
  title: string;
  abstract: string;
  url: Url[];
  openaccess: string;
  publicationName: string; 
}

interface JournalCardGridProps {
  records: IndividualRecord[];
}

export default function JournalCardGrid({ records }: JournalCardGridProps) {
  return (
    <div className="my-20">
      <h2 className="text-4xl text-white font-bold mb-8">Your Query Matched The Following Papers</h2>
      {records.length > 0 ? (
        <section className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {records.map((record: IndividualRecord, index: number) => (
            <JournalCard 
              key={index}
              header={record.title}
              description={record.abstract}
              publicationName={record.publicationName}
              openAccess={record.openaccess}
              link={record.url.length > 0 ? record.url[0].value : '#'}
            />
          ))}
        </section>
      ) : (
        <p className="text-gray-700 text-md">Unfortunately, your query didn't match any papers. Please try again.</p>
      )}
    </div>
  );
}
