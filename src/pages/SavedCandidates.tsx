import { useLocation } from 'react-router-dom';

// show the user I saved on the CandidateSearch page here
const SavedCandidates = () => {
  const location = useLocation();
  const savedCandidate = location.state?.savedCandidate;

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidate ? (
        <div>
          <h2>Saved Candidate</h2>
          <p>Name: {savedCandidate.name}</p>
          <p>Email: {savedCandidate.email}</p>
        </div>
      ) : (
        <p>No candidate saved.</p>
      )}
    </>
  );
};
export default SavedCandidates;
