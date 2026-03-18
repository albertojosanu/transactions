import { useState, useEffect, useContext } from "react";
import { SContainer } from "../../index.styled.js";
import {
  SCalendar__ttl,
  SCalendar__scrolled,
  SCalendar__block,
  SCalendar__month,
  SCalendar__daysNames,
  SCalendar__cells,
  SCalendar__cell,
} from "./Calendar.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";

function Calendar() {
  const { start, setStart, end, setEnd, showTransactions, range } =
    useContext(TransactionContext);

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
    start &&
      end &&
      showTransactions(
        String(new Date(start).getMonth() + 1).padStart(2, "0") +
          "-" +
          String(new Date(start).getDate()).padStart(2, "0") +
          "-" +
          new Date(start).getFullYear(),
        String(new Date(end).getMonth() + 1).padStart(2, "0") +
          "-" +
          String(new Date(end).getDate()).padStart(2, "0") +
          "-" +
          new Date(end).getFullYear(),
      );
  }, [start, end]);

  return (
    <SContainer $width="379px" $height="540px" $noPadding>
      <SCalendar__ttl>Период</SCalendar__ttl>
      <SCalendar__daysNames>
        <span>пн</span>
        <span>вт</span>
        <span>ср</span>
        <span>чт</span>
        <span>пт</span>
        <span className="-weekend-">сб</span>
        <span className="-weekend-">вс</span>
      </SCalendar__daysNames>
      <SCalendar__scrolled>
        {range(11, 0, true).map((i) => (
          <SCalendar__block key={i}>
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
            <SCalendar__cells>
              {range(
                1,
                new Date(year(i), month(i), 1).getDay() !== 0
                  ? new Date(year(i), month(i), 1).getDay() - 1
                  : 6,
              ).map((data) => (
                <SCalendar__cell key={data}>
                </SCalendar__cell>
              ))}
              {range(1, new Date(year(i), month(i) + 1, 0).getDate()).map(
                (data) => (
                  <SCalendar__cell
                    key={data}
                    $exist
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
                      new Date(year(i), month(i), data).getTime() >= start &&
                      new Date(year(i), month(i), data).getTime() <= end
                    }
                    onClick={() => {

                      !start || !end
                        ? (setStart(
                            new Date(year(i), month(i), data).getTime(),
                          ),
                          setEnd(new Date(year(i), month(i), data).getTime()))
                        : start === end &&
                            new Date(year(i), month(i), data).getTime() ===
                              start
                          ? (setStart(null), setEnd(null))
                          : new Date(year(i), month(i), data).getTime() ===
                              start
                            ? setStart(end)
                            : new Date(year(i), month(i), data).getTime() ===
                                end
                              ? setEnd(start)
                              : new Date(year(i), month(i), data).getTime() <
                                  start
                                ? setStart(
                                    new Date(year(i), month(i), data).getTime(),
                                  )
                                : setEnd(
                                    new Date(year(i), month(i), data).getTime(),
                                  );
                    }}
                  >
                    {data}
                  </SCalendar__cell>
                ),
              )}
            </SCalendar__cells>
          </SCalendar__block>
        ))}
      </SCalendar__scrolled>
    </SContainer>
  );
}

export default Calendar;
