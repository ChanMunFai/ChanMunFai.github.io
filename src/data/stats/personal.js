import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-05-14T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

// Ord calculator
const Ord = () => {
  const [ord, setOrd] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24; // ms in an average year
    const ordTime = new Date('2023-03-06T09:24:00');
    setOrd(((ordTime - Date.now()) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{ord}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'ord calculator',
    label: 'Number of days to ORD',
    value: <Ord />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Singapore, Singapore',
  },
];

export default data;
