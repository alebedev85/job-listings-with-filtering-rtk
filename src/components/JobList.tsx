import JobPosition from './JobPosition';
import { useSelector } from "react-redux";
import { selectVisiblePositions } from '../store/selectors';
import { selectCategores } from 'store/selectors';
import { addCategores } from '../store/categoresSlice';
import { useAppSelector, useAppDispatch } from 'store';
import { ItemType } from 'store/types';

export default function JobList() {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectCategores);
  const positions = useAppSelector(state => selectVisiblePositions(state, filters));

  const handleAddBadge = (badge: string) => {
    dispatch(addCategores(badge))
  }

  return (
    <div className='job-list'>
      {positions.map((item: ItemType) => (
        <JobPosition key={item.id} {...item} onBadgeClick={handleAddBadge} />
      ))}
    </div>
  )
}