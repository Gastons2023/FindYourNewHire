import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await searchGithub();
        console.log('Result:', result);
        setCandidates(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };
  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + candidates.length) % candidates.length);
  };
  const candidate = candidates[index];
  if (!candidate) {
    return <div>No Candidates Available</div>;
  }
  return (
    <div>
      <h1>Candidate Search</h1>
      <div>
       <div className="card">
        <img src={candidate.avatar_url} className="card-img-top" alt="Candidate Avatar" />
        <div className="card-body">
          <h5 className="card-title">{candidate.name}({candidate.login})</h5>
          <p className="card-text">Email: {candidate.email}</p>
          <p className="card-text">Location: {candidate.location}</p>
          <p className="card-text">Company: {candidate.company}</p>
          <p className="card-text">Bio: {candidate.bio}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Profile</a>
        </div>
        <div className="card-footer">
          <button className="btn btn-secondary" onClick={handlePrevious}>Previous</button>
          <button className="btn btn-secondary" onClick={handleNext}>Next</button>
          </div>
       </div>
      </div>
    </div>
  );
};


export default CandidateSearch;
