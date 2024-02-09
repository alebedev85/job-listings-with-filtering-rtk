import Badge from 'UI/Badge';
import Card from 'UI/Card';
import Stack from 'UI/Stack';
import { useAppDispatch, useAppSelector } from 'store';
import { selectCategores } from 'store/selectors';
import { deleteCategores, clearCategores} from '../store/categoresSlice'



export default function FilterPanel() {
  const dispatch = useAppDispatch();
  const badges = useAppSelector(selectCategores);

  const handelDelFilter = (filter: string) => {
    dispatch(deleteCategores(filter))
  }

  // console.log(badges);

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {badges.map((badge: string) => (
            <Badge
              key={badge}
              variant='clearable'
              onClear={() => handelDelFilter(badge)}>
              {badge}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearCategores())}>Clear</button>
      </div>
    </Card>
  )
}