

function LeftBlock() {



  // Replace with the actual implementation of arrDays
  const arrDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return (
    <div className="flip-container-left">
      
        <div className="front front-left">
          <h2>Today</h2>
          {/* Replace with the actual implementation of date */}
          <h1>{new Date().getDate()}</h1>
          <h2>{arrDays[new Date().getDay()]}</h2>
        </div>
      </div>
  
  );
}

export default LeftBlock;
