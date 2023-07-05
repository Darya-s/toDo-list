import React from "react";
import useState from 'react';
import useEffect from 'react';

export default function MyTimer () {
    const [timer, setTimer] = useState(0)
    useEffect(() => {
      const timer = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    return(
        <h2 className="bg-amber-600">
          You have used  {timer} seconds on Todolist application
        </h2>
    )
}

