import Card from './Card';

const ContributorList = ({ contributors, lastContributorRef }) => {
    if (!contributors || contributors.length === 0) {
      // return <div>No contributors found.</div>; // In case contributors are empty or undefined
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {contributors.map((contributor, index) => {
          const isLast = contributors.length === index + 1;
          return (
            <Card key={contributor.id} contributor={contributor} isLast={isLast} lastContributorRef={lastContributorRef} />
            
          );
        })}
      </div>
    );
  };
  
  export default ContributorList;
  