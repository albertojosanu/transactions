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
  const { date, setDate } = useContext(TransactionContext);
  const [activeMonth, setActiveMonth] = useState(null);
  const [activeYear, setActiveYear] = useState(null);
  const [activeDay, setActiveDay] = useState(null);
  const [deadline, setDeadline] = useState("Срок исполнения: ");

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    date &&
      (setActiveDay(date.getDate()),
      setActiveMonth(date.getMonth()),
      setActiveYear(date.getFullYear()));
  }, [date]);

  useEffect(() => {
    activeDay &&
      setDate(
        new Date(
          activeYear,
          activeMonth < 10 ? "0" + activeMonth : activeMonth,
          activeDay < 10 ? "0" + activeDay : activeDay,
          5,
        ),
      );
  }, [activeDay, activeMonth, activeYear]);

  return (
    <>
      <GlobalStyle />
      <SCalendar>
        <SCalendar__ttl>
          <SSubttl>Даты</SSubttl>
        </SCalendar__ttl>
        <SCalendar__block>
          <SCalendar__nav>
            <SCalendar__month>
              {(() => {
                switch (activeMonth) {
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
              {activeYear}
            </SCalendar__month>
            <SNav__actions>
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
            </SNav__actions>
          </SCalendar__nav>
          <SCalendar__content>
            <SCalendar__daysNames>
              <SCalendar__dayName>пн</SCalendar__dayName>
              <SCalendar__dayName>вт</SCalendar__dayName>
              <SCalendar__dayName>ср</SCalendar__dayName>
              <SCalendar__dayName>чт</SCalendar__dayName>
              <SCalendar__dayName>пт</SCalendar__dayName>
              <SCalendar__dayName className="-weekend-">сб</SCalendar__dayName>
              <SCalendar__dayName className="-weekend-">вс</SCalendar__dayName>
            </SCalendar__daysNames>
            <SCalendar__cells>
              {range(
                1,
                new Date(activeYear, activeMonth, 1).getDay() !== 0
                  ? new Date(activeYear, activeMonth, 1).getDay() - 1
                  : 6,
              ).map((data) => (
                <SCalendar__cell key={data}>
                  <S_cellDay></S_cellDay>
                </SCalendar__cell>
              ))}
              {range(1, new Date(activeYear, activeMonth + 1, 0).getDate()).map(
                (data) => (
                  <SCalendar__cell
                    key={data}
                    onClick={() => {
                      !activeDay || data != activeDay
                        ? (setActiveDay(data), setDeadline("Срок исполнения: "))
                        : (setActiveDay(null),
                          setDate(null),
                          setDeadline("Выберите срок исполнения"));
                    }}
                  >
                    <S_cellDay>
                      {new Date().toLocaleDateString("ru-RU") ===
                      new Date(
                        activeYear,
                        activeMonth,
                        data,
                      ).toLocaleDateString("ru-RU") ? (
                        <S_current>
                          {new Date(activeYear, activeMonth, data).getDay() ===
                            0 ||
                          new Date(activeYear, activeMonth, data).getDay() ===
                            6 ? (
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
                        </S_current>
                      ) : (
                        <>
                          {new Date(activeYear, activeMonth, data).getDay() ===
                            0 ||
                          new Date(activeYear, activeMonth, data).getDay() ===
                            6 ? (
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
                    </S_cellDay>
                  </SCalendar__cell>
                ),
              )}
            </SCalendar__cells>
          </SCalendar__content>

          <input type="hidden" id="datepick_value" value="01.01.2026" />
          <SCalendar__period>
            <SCalendar__p>
              <SDateEnd>
                {deadline}
                {date !== null && (
                  <SDateControl>
                    {date.toLocaleDateString("ru-RU")}
                  </SDateControl>
                )}
              </SDateEnd>
            </SCalendar__p>
          </SCalendar__period>
        </SCalendar__block>
      </SCalendar>
    </>
  );
}

export default Calendar;
