import { useState, ChangeEvent, MouseEvent } from 'react';

const arrMonth: { [key: string]: number } = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

const arrDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

interface RightBlockProps {
  date: Date;
  toggle: boolean;
  eventList: any[]; 
  handleToUpdateDate: (newToggle: boolean) => void;
}

function RightBlock(props: RightBlockProps) {
  const [firstDay, setFirstDay] = useState<number>(() =>
    new Date(
      `${props.date.getFullYear()}-${props.date.getMonth() + 1}-01`
    ).getDay()
  );
  const [selectedYear, setSelectedYear] = useState<number>(props.date.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(props.date.getMonth());
  const [selectedDay, setSelectedDay] = useState<number>(props.date.getDate());

  const updateMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMonth = Object.keys(arrMonth).indexOf(event.target.value);
    setSelectedMonth(newMonth);
    setFirstDay(new Date(
      `${selectedYear}-${newMonth + 1}-01`
    ).getDay());
  };

  const prevMonth = () => {
    if (selectedMonth - 1 < 0) {
      props.handleToUpdateDate(false);
      setSelectedMonth(11);
      setSelectedYear(prevYear => prevYear - 1);
      setFirstDay(new Date(
        `${selectedYear - 1}-12-01`
      ).getDay());
    } else {
      props.handleToUpdateDate(false);
      setSelectedMonth(prevMonth => prevMonth - 1);
      setFirstDay(new Date(
        `${selectedYear}-${prevMonth}-01`
      ).getDay());
    }
  };
  

  const nextMonth = () => {
    if (selectedMonth + 1 > 11) {
      props.handleToUpdateDate(false);
      setSelectedMonth(0);
      setSelectedYear((prevYear) => prevYear + 1);
      setFirstDay(new Date(`${selectedYear + 1}-01-01`).getDay());
    } else {
      props.handleToUpdateDate(false);
      setSelectedMonth((prevMonth) => prevMonth + 1);
      setFirstDay(new Date(`${selectedYear}-${selectedMonth + 2}-01`).getDay());
    }
  };
  

  const updateYear = (event: ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(event.target.value);
    if (!isNaN(newYear)) {
      if (event.target.value.length === 4) {
        props.handleToUpdateDate(false);
        setSelectedYear(newYear);
        setFirstDay(new Date(
          `${newYear}-${selectedMonth + 1}-01`
        ).getDay());
      } else {
        setSelectedYear(newYear);
      }
    }
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const selectedId = event.currentTarget.dataset.id;
    if (selectedId !== undefined) {
      props.handleToUpdateDate(false);
      setSelectedDay(parseInt(selectedId));
    }
  };

  const getDayBlocks = () => {
    const arrNo: JSX.Element[] = [];
    for (let n = 0; n < firstDay; n++) {
      arrNo.push(<div className="day-block" key={n} />);
    }
    for (let i = 1; i < arrMonth[Object.keys(arrMonth)[selectedMonth]] + 1; i++) {



      arrNo.push(
        <div
          data-id={i}
          onClick={handleClick}
          className={`day-block ${i === selectedDay ? "active" : ""}`}
          key={i}
        >
          <div className="inner">{i}</div>
        </div>
      );
    }
    return arrNo;
  }

  const getEvents = () => {
    const events: JSX.Element[] = [];
    props.eventList.forEach((event) => {
      const dateArr = event[0].split('/');
      if (
        dateArr[0] == selectedDay &&
        dateArr[1] == selectedMonth &&
        dateArr[2] == selectedYear
      ) {
        events.push(
          <div className="event" key={event[0]}>
            <p className="event-time">{event[1]}</p>
            <p className="event-name">{event[2]}</p>
          </div>
        );
      }
    });
    return events;
  }

  const monthOptions = Object.keys(arrMonth).map((month, index) => (
    <option
      className="option-month"
      key={month}
      value={index}
    >
      {month}
    </option>
  ));

  return (
    <div className="flip-container-right">
      <div className={`flipper ${props.toggle ? "" : "toggle"}`}>
        <div className="front front-right">
          <div className="container-date-picker">
            <button className="btn btn-prev" onClick={prevMonth}>
              &lt;
            </button>
            <select className="select-month" onChange={updateMonth}>
              {monthOptions}
            </select>
            <input
              type="text"
              className="input-year"
              onChange={updateYear}
              value={selectedYear}
              maxLength={4}
            />
            <button className="btn btn-next" onClick={nextMonth}>
              &gt;
            </button>
          </div>
          <div className="container-day">
            {arrDays.map((day) => (
              <div className="weekday" key={day}>
                {day.substring(0, 3)}
              </div>
            ))}
            {getDayBlocks()}
          </div>
        </div>
        <div className="back back-right">
          <div className="container-events">{getEvents()} </div>
        </div>
      </div>
    </div>
  );
}

export default RightBlock;
