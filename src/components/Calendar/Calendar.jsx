import { useState, useEffect, useContext } from "react";
import { GlobalStyle } from "../../index.styled.js";
import {
  SCalendar,
  SCalendar__ttl,
  SCalendar__nav,
  SCalendar__period,
  SSubttl,
  SCalendar__block,
  SCalendar__month,
  SNav__actions,
  SNav__action,
  SCalendar__content,
  SCalendar__daysNames,
  SCalendar__dayName,
  SCalendar__cells,
  SCalendar__cell,
  S_cellDay,
  S_current,
  S_weekend,
  SCalendar__p,
  SDateEnd,
  S_activeDay,
  SDateControl,
} from "./Calendar.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";

function Calendar() {
  const { start, setStart, end, setEnd, showTransactions, range } =
    useContext(TransactionContext);
  // const [activeMonth, setActiveMonth] = useState(null);
  // const [activeYear, setActiveYear] = useState(null);
  // const [activeDay, setActiveDay] = useState(null);
  // const [deadline, setDeadline] = useState("Срок исполнения: ");

  // const range = (start, end, reverse = false) =>
  //   !reverse
  //     ? Array.from({ length: end - start + 1 }, (_, i) => start + i)
  //     : Array.from({ length: start - end + 1 }, (_, i) => start - i);

  // useEffect(() => {
  //   setDate(new Date());
  // }, []);

  // useEffect(() => {
  //   date &&
  //     (setActiveDay(date.getDate()),
  //     setActiveMonth(date.getMonth()),
  //     setActiveYear(date.getFullYear()));
  // }, [date]);

  // useEffect(() => {
  //   activeDay &&
  //     setDate(
  //       new Date(
  //         activeYear,
  //         activeMonth < 10 ? "0" + activeMonth : activeMonth,
  //         activeDay < 10 ? "0" + activeDay : activeDay,
  //         5,
  //       ),
  //     );
  // }, [activeDay, activeMonth, activeYear]);

  // const newDate = (activeYear, activeMonth, activeDay) => {
  //   return new Date(activeYear, activeMonth, activeDay, 5).setHours(
  //     -formData.date.getTimezoneOffset() / 60,
  //   );
  // };

  //{range(11, 0).map((i) => (new Date().getMonth() - i >= 0) ? (new Date().getMonth() - i) : (new Date().getMonth() - i + 12))}

  // {range(Math.floor((String(row.sum).length + 2) / 3), 1).map(
  //                   (i) =>
  //                     i === 1
  //                       ? String(row.sum).slice(-3) + " ₽"
  //                       : String(row.sum).slice(-3 * i, -3 * (i - 1)) + " ",
  //                 )}

  //   const month = (start, end) =>
  //     Array.from({ length: end - start + 1 }, (_, i) => start + i);

  //   new Date().getMonth() - i

  //   i 0 - 11

  //   if new Date().getMonth() - i < 0 then new Date().getMonth() - i + 12

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const month = (diff) => {
    return currentMonth - diff >= 0
      ? currentMonth - diff
      : currentMonth - diff + 12;
  };
  const year = (diff) => {
    return currentMonth - diff >= 0 ? currentYear : currentYear - 1;
  };

  useEffect(() => {
    start && end &&
      showTransactions(String(new Date(start).getMonth() + 1).padStart(2, '0') + "-" + String(new Date(start).getDate()).padStart(2, '0') + "-" + new Date(start).getFullYear(), String(new Date(end).getMonth() + 1).padStart(2, '0') + "-" + String(new Date(end).getDate()).padStart(2, '0') + "-" + new Date(end).getFullYear());
  }, [start, end]);


  return (
    <>
      <GlobalStyle />
      <SCalendar>
        <SCalendar__ttl>
          <SSubttl>Период</SSubttl>
        </SCalendar__ttl>
        {/* {cards.map((data) => (
            <Card cards={cards} id={data._id} key={data._id} />
          ))} */}
        {range(11, 0, true).map((i) => (
          //     {month - i >= 0 ? (setActiveMonth(month - i),
          // setActiveYear(year)) : (setActiveMonth(month - i + 12),
          // setActiveYear(year - 1))}

          // month - i >= 0 ? month - i : month - i + 12
          // month - i >= 0 ? year : year - 1

          <SCalendar__block key={i}>
            <SCalendar__nav>
              <SCalendar__month>
                {(() => {
                  switch (month(i)) {
                    case 0:
                      return "Январь ";
                    case 1:
                      return "Февраль ";
                    case 2:
                      return "Март ";
                    case 3:
                      return "Апрель ";
                    case 4:
                      return "Май ";
                    case 5:
                      return "Июнь ";
                    case 6:
                      return "Июль ";
                    case 7:
                      return "Август ";
                    case 8:
                      return "Сентябрь ";
                    case 9:
                      return "Октябрь ";
                    case 10:
                      return "Ноябрь ";
                    case 11:
                      return "Декабрь ";
                  }
                })()}
                {year(i)}
              </SCalendar__month>
              {/* <SNav__actions>
              <SNav__action
                data-action="prev"
                onClick={() => {
                  activeMonth > 0
                    ? setActiveMonth(activeMonth - 1)
                    : (setActiveMonth(11),
                      activeYear > 2026 && setActiveYear(activeYear - 1));
                  activeDay > new Date(activeYear, activeMonth, 0).getDate() &&
                    setActiveDay(
                      new Date(activeYear, activeMonth, 0).getDate(),
                    );
                  console.log(
                    range(11, 0).map((i) =>
                      new Date().getMonth() - i >= 0
                        ? new Date().getMonth() - i
                        : new Date().getMonth() - i + 12,
                    ),
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </SNav__action>
              <SNav__action
                data-action="next"
                onClick={() => {
                  activeMonth < 11
                    ? setActiveMonth(activeMonth + 1)
                    : (setActiveMonth(0),
                      activeYear < 2030 && setActiveYear(activeYear + 1));
                  activeDay >
                    new Date(activeYear, activeMonth + 2, 0).getDate() &&
                    setActiveDay(
                      new Date(activeYear, activeMonth + 2, 0).getDate(),
                    );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
              </SNav__action>
            </SNav__actions> */}
            </SCalendar__nav>
            <SCalendar__content>
              <SCalendar__daysNames>
                <SCalendar__dayName>пн</SCalendar__dayName>
                <SCalendar__dayName>вт</SCalendar__dayName>
                <SCalendar__dayName>ср</SCalendar__dayName>
                <SCalendar__dayName>чт</SCalendar__dayName>
                <SCalendar__dayName>пт</SCalendar__dayName>
                <SCalendar__dayName className="-weekend-">
                  сб
                </SCalendar__dayName>
                <SCalendar__dayName className="-weekend-">
                  вс
                </SCalendar__dayName>
              </SCalendar__daysNames>
              <SCalendar__cells>
                {range(
                  1,
                  new Date(year(i), month(i), 1).getDay() !== 0
                    ? new Date(year(i), month(i), 1).getDay() - 1
                    : 6,
                ).map((data) => (
                  <SCalendar__cell key={data}>
                    {/* {data === 1 &&
                      console.log(
                        year(i) +
                          " " +
                          month(i) +
                          " " +
                          new Date(year(i), month(i), 1).getDay() !==
                          0
                          ? new Date(year(i), month(i), 1).getDay() - 1
                          : 6,
                      )} */}
                    {/* {console.log(range(1,0))} */}
                    <S_cellDay></S_cellDay>
                  </SCalendar__cell>
                ))}
                {range(1, new Date(year(i), month(i) + 1, 0).getDate()).map(
                  //{range(1, month(i) !== 11 ? new Date(year(i), month(i) + 1, 0).getDate() : new Date(year(i) + 1, 0, 0).getDate()).map(
                  (data) => (
                    //(data === 1) && console.log(year(i) + " " + month(i) + " " + new Date(year(i), month(i) + 1, 0).getDate()),
                    <SCalendar__cell
                      key={data}
                      onClick={() => {


                        // !start ||
                        // !end ||
                        // (new Date(year(i), month(i), data).toLocaleDateString(
                        //   "ru-RU",
                        // ) !== start &&
                        //   new Date(year(i), month(i), data).toLocaleDateString(
                        //     "ru-RU",
                        //   ) !== end)
                        //   ? //setActiveDay(data),
                        //     (setStart(
                        //       new Date(
                        //         year(i),
                        //         month(i),
                        //         data,
                        //       ).toLocaleDateString("ru-RU"),
                        //     ),
                        //     // console.log(year(i), month(i), data),
                        //     // console.log(new Date().toLocaleDateString("ru-RU")),
                        //     // console.log(new Date(year(i), month(i), data).toLocaleDateString("ru-RU")),
                        //     // console.log(date),
                        //     setDeadline("Срок исполнения: "))
                        //   : //setActiveDay(null),
                        //     (setStart(null),
                        //     setDeadline("Выберите срок исполнения"));


                        (!start || !end) ?
                        (setStart(new Date(year(i),month(i),data).getTime()), setEnd(new Date(year(i),month(i),data).getTime()))
                        :
                        ((start === end && new Date(year(i),month(i),data).getTime() === start) ? (setStart(null), setEnd(null)):
                        (new Date(year(i),month(i),data).getTime() === start ? setStart(end) : (new Date(year(i),month(i),data).getTime() === end ? setEnd(start) : (new Date(year(i),month(i),data).getTime() < start ? setStart(new Date(year(i),month(i),data).getTime()) : setEnd(new Date(year(i),month(i),data).getTime())))))
                        //{console.log(showTransactions("1-1-2026", "2-2-2026"))}
                        //{console.log(showTransactions(String(new Date(start).getMonth() + 1).padStart(2, '0') + "-" + String(new Date(start).getDate()).padStart(2, '0') + "-" + new Date(start).getFullYear(), String(new Date(end).getMonth() + 1).padStart(2, '0') + "-" + String(new Date(end).getDate()).padStart(2, '0') + "-" + new Date(end).getFullYear()))}
                        //String(start.getMonth() + 1).padStart(2, '0') + "-" + String(start.getDate()).padStart(2, '0') + "-" + start.getFullYear()
                        //{console.log(new Date(start).toLocaleDateString("en-CA"))}
                        



                        // {console.log(start, end, start === end, new Date(start.getTime()))}
//                         {console.log(start.toLocaleDateString("ru-RU"), end.toLocaleDateString("ru-RU"), start.toLocaleDateString("ru-RU") === end.toLocaleDateString("ru-RU"))}
// {console.log(new Date(year(i),month(i),data).toLocaleDateString("ru-RU"))}
// {console.log(new Date(year(i),month(i),data).toLocaleDateString("ru-RU") >= start)}
// {console.log(new Date(2025,5,2).toLocaleDateString("ru-RU"))}
// {console.log(new Date(year(i),month(i),data) < new Date(2025,5,2))}

                        //(new Date(year(i),month(i),data).toLocaleDateString("ru-RU") !== start && new Date(year(i),month(i),data).toLocaleDateString("ru-RU") !== end) ? (new Date(year(i),month(i),data).toLocaleDateString("ru-RU") < start ? setStart(new Date(year(i),month(i),data).toLocaleDateString("ru-RU")) : setEnd(new Date(year(i),month(i),data).toLocaleDateString("ru-RU"))) : ()
                        




                        
                        // start && !end 
                        // (new Date(year(i),month(i),data).toLocaleDateString("ru-RU") !== start && new Date(year(i),month(i),data).toLocaleDateString("ru-RU") !== end) && (start <= new Date(year(i),month(i),data).toLocaleDateString("ru-RU") ? setEnd(new Date(year(i),month(i),data).toLocaleDateString("ru-RU")) : (setEnd(start), setStart(new Date(year(i),month(i),data).toLocaleDateString("ru-RU"))))

                        // !start && end 
                        // (new Date(year(i),month(i),data).toLocaleDateString("ru-RU") !== start && new Date(year(i),month(i),data).toLocaleDateString("ru-RU") !== end) && (new Date(year(i),month(i),data).toLocaleDateString("ru-RU") <= end ? setStart(new Date(year(i),month(i),data).toLocaleDateString("ru-RU")) : (setStart(end), setEnd(new Date(year(i),month(i),data).toLocaleDateString("ru-RU"))))

                        // start && end 
                        // new Date(year(i),month(i),data).toLocaleDateString("ru-RU") < start ? setStart(new Date(year(i),month(i),data).toLocaleDateString("ru-RU")) : (new Date(year(i),month(i),data).toLocaleDateString("ru-RU") > end)


                        // start ? 
                        //     (end ? (end > start ? ) : ())
                        //     : ()


                      }}
                    >
                      <S_cellDay
                        $current={
                          new Date().toLocaleDateString("ru-RU") ===
                          new Date(year(i), month(i), data).toLocaleDateString(
                            "ru-RU",
                          )
                        }
                        $weekend={
                          new Date(year(i), month(i), data).getDay() === 0 ||
                          new Date(year(i), month(i), data).getDay() === 6
                        }
                        $activeDay={
                              new Date(
                                year(i),
                                month(i),
                                data,
                              ).getTime() >= start && new Date(
                                year(i),
                                month(i),
                                data,
                              ).getTime() <= end 
                        }
                      >
                        {data}
                      </S_cellDay>

                      {/* <S_cellDay>
                        {new Date().toLocaleDateString("ru-RU") ===
                        new Date(year(i), month(i), data).toLocaleDateString(
                          "ru-RU",
                        ) ? (
                          <S_current>
                            {new Date(year(i), month(i), data).getDay() === 0 ||
                            new Date(year(i), month(i), data).getDay() === 6 ? (
                              <S_weekend>
                                {activeDay === data ? (
                                  <S_activeDay>{data}</S_activeDay>
                                ) : (
                                  data
                                )}
                              </S_weekend>
                            ) : (
                              <>
                                {new Date(
                                  year(i),
                                  month(i),
                                  data,
                                  -new Date().getTimezoneOffset() / 60,
                                ).toLocaleDateString("ru-RU") ===
                                date ? (
                                  <S_activeDay>{data}{console.log(new Date(
                                year(i),
                                month(i),
                                data,
                                -new Date().getTimezoneOffset() / 60,
                              ).toLocaleDateString("ru-RU"))}</S_activeDay>
                                ) : (
                                  data
                                )}
                              </>
                            )}
                          </S_current>
                        ) : (
                          <>
                            {new Date(year(i), month(i), data).getDay() === 0 ||
                            new Date(year(i), month(i), data).getDay() === 6 ? (
                              <S_weekend>
                                {activeDay === data ? (
                                  <S_activeDay>{data}</S_activeDay>
                                ) : (
                                  data
                                )}
                              </S_weekend>
                            ) : (
                              <>
                                {activeDay === data ? (
                                  <S_activeDay>{data}</S_activeDay>
                                ) : (
                                  data
                                )}
                              </>
                            )}
                          </>
                        )}
                      </S_cellDay> */}
                    </SCalendar__cell>
                  ),
                )}
              </SCalendar__cells>
            </SCalendar__content>

            {/* <input type="hidden" id="datepick_value" value="01.01.2026" />
            <SCalendar__period>
              <SCalendar__p>
                <SDateEnd>
                  {deadline}
                  {start !== null && (
                    <SDateControl>
                      {date.toLocaleDateString("ru-RU")}
                    </SDateControl>
                  )}
                </SDateEnd>
              </SCalendar__p>
            </SCalendar__period> */}
          </SCalendar__block>
        ))}
      </SCalendar>
    </>
  );
}

export default Calendar;
