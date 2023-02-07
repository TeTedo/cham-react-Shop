import React, { useState } from "react";
import MyPageDaySell from "./MyPageDaySell";
import MyPageSeller from "./MyPageSeller";
const MyPageSellerEnter = () => {
  const [move, setMove] = useState(false);
  const [dayData, setDayData] = useState([]);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [date, setDate] = useState(0);
  return (
    <>
      {move ? (
        <MyPageDaySell
          dayData={dayData}
          month={month}
          year={year}
          date={date}
        ></MyPageDaySell>
      ) : (
        <MyPageSeller
          setMove={setMove}
          setDayData={setDayData}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          setDate={setDate}
        ></MyPageSeller>
      )}
    </>
  );
};

export default MyPageSellerEnter;
