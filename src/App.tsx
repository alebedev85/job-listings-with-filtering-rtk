import FilterPanel from 'components/FilterPanel';
import JobList from 'components/JobList';
import TheHeader from 'components/TheHeader';
import data from './mock/data.json';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { addJobs } from './store/jobsSlice'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addJobs(data))
  }, [])

  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
