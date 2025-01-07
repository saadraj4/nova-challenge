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
  
  {/*<div key={contributor.id} ref={isLast ? lastContributorRef : null}>
              <div className="p-4 border rounded shadow-md">
                <img src={contributor.avatar_url} alt={contributor.login} className="w-16 h-16 rounded-full" />
                <h3>{contributor.login}</h3>
                <p>Commits: {contributor.contributions}</p>
                <button className="btn-compass">🔍</button> 
                <div className="indicator">Selectable</div> 
              </div>
            </div>*/}