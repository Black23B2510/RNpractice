import {useEffect, useState} from 'react';
export const useGetHour = () => {
  const [times, setTimes] = useState();
  useEffect(() => {
    let setTimer = setInterval(() => {
      var h = new Date().getHours();
      var minu = new Date().getMinutes();
      var sec = new Date().getSeconds();
      setTimes(h + ':' + minu + ':' + sec);
    }, 1000);
    return () => {
      clearInterval(setTimer);
    };
  }, []);

  return {times};
};
