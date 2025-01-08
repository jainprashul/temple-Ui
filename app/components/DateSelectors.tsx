import { utilityActions } from "store/context/utilitySlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const DateSelector = () => {
  const dispatch = useAppDispatch();

  const { start, end } = useAppSelector(state => state.utility.time);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // dispatch action
    if (name === 'start') {
      dispatch(utilityActions.setTime({ start: value, end }));
      console.log('start', value);
    } else {
      console.log('end', value);
      dispatch(utilityActions.setTime({ start, end: value }));
    }
  }

  return (
    <div className='flex gap-2'>
      <div className='form-control items-center flex-row gap-2'>
        <label className="label-text">From</label>
        <input value={start} onChange={handleDateChange} name='start' type="date" className="input input-sm input-bordered" />
      </div>
      <div className='form-control items-center flex-row gap-2'>
        <label className="label-text">To</label>
        <input value={end} onChange={handleDateChange} name='end' type="date" className="input input-sm input-bordered" />
      </div>

    </div>
  )
}

export default DateSelector;