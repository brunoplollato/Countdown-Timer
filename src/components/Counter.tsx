import { FC, useEffect, useState } from "react";

interface CounterProps {
  date: Date;
}

const Counter: FC<CounterProps> = ({ date }: CounterProps) => {
  const [today, setToday] = useState<Date>(new Date());
  const [distance, setDistance] = useState<number>(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setDistance(date.getTime() - today.getTime());
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, [today]);

  const startTimer = () => {
    const x = setInterval(function () {
      setToday(new Date());
    }, 1000);
    return x;
  };
  startTimer();
  return (
    <div className="counter-wrapper">
      <div className="counter-item">
        <div>
          <p className="counter-value">{days > 0 ? days : 0}</p>
          <p className="counter-label">{days > 1 ? "days" : "day"}</p>
        </div>
        <p className="counter-divisor">:</p>
      </div>
      <div className="counter-item">
        <div>
          <p className="counter-value">{hours > 0 ? hours : 0}</p>
          <p className="counter-label">{hours > 1 ? "hours" : "hour"}</p>
        </div>
        <p className="counter-divisor">:</p>
      </div>
      <div className="counter-item">
        <div>
          <p className="counter-value">{minutes > 0 ? minutes : 0}</p>
          <p className="counter-label">{minutes > 1 ? "minutes" : "minute"}</p>
        </div>
        <p className="counter-divisor">:</p>
      </div>
      <div className="counter-item">
        <div>
          <p className="counter-value">{seconds > 0 ? seconds : 0}</p>
          <p className="counter-label">{seconds > 1 ? "seconds" : "second"}</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
