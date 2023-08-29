import { useState } from 'react';
import RightBlock from './RightBlock';
import LeftBlock from './LeftBlock';

function Calendar() {
    const [toggle, setToggle] = useState(true);
    const date = new Date();
    const eventList: any[] = []; 

  
    const handleToUpdateDate = (newToggle: boolean) => {
        setToggle(newToggle);
    };
  
    return (
        <div>
            <RightBlock 
                date={date}
                toggle={toggle}
                eventList={eventList}
                handleToUpdateDate={handleToUpdateDate}
            />
            <LeftBlock />
        </div>
    );
}

export default Calendar;
