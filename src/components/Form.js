import {useState} from 'react'


const Form = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text){
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder });
        setText('');
        setDay('');
        setReminder(false);
    }


  return (
    <form onSubmit={onSubmit}>
        <div className='add-form'>
            <div className='form-control'>
                <label for="task-description">Task</label>
                <input type='text' name="text-description" placeholder="Type something ..." value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label for="time-and-date">Day & Time</label>
                <input type='text' name="time-and-date" placeholder="Insert time and date" value={day} onChange={e => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label for="Reminder">Set Reminder</label>
                <input type='checkbox' name="reminder" checked={reminder} value={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save' className='btn btn-block'/>

        </div>
    </form>
  )
}

export default Form