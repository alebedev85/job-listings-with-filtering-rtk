import JobPosition from './JobPosition';
import { useSelector } from "react-redux";
import {selectVisiblePositions} from '../store/jobs/jobs-selectors';
import { selectCategores } from 'store/categores/categores-selectors';
import { useDispatch } from "react-redux";
import {addCategore} from '../store/categores/categores-actions';

type ItemType = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

export default function JobList () {
  const dispatch = useDispatch();
  const filters = useSelector(selectCategores);
  const positions = useSelector(state => selectVisiblePositions(state, filters));

  const handleAddBadge = (badge: string) => {
    dispatch(addCategore(badge))
  }

  return (
    <div className='job-list'>
      {positions.map((item: ItemType) => (
        <JobPosition key={item.id} {...item} onBadgeClick={handleAddBadge}/>
      ))}
    </div>
  )
}