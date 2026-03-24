import { useContext, useState, useEffect } from "react";
import { SContainer } from "../../index.styled.js";
import {
  SChart__ttl,
  SChart__description,
  SChart__description__bold,
  SChart__group,
  SChart__visual,
  SChart__sum,
  SChart__bar,
  SChart__category,
} from "./Chart.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";

function Chart() {
  const { periodTransactions, start, end, format } =
    useContext(TransactionContext);

  const [categorySumVisual, setCategorySumVisual] = useState({});

  let categorySum = {
    food: 0,
    transport: 0,
    housing: 0,
    joy: 0,
    education: 0,
    others: 0,
  };

  useEffect(() => {
    Object.keys(categorySum).forEach((key) => {
      categorySum[key] = periodTransactions
        .filter((data) => data.category === key)
        .reduce((total, currentValue) => total + currentValue.sum, 0);
    });

    setCategorySumVisual({
      Eда: categorySum.food,
      Транспорт: categorySum.transport,
      Жилье: categorySum.housing,
      Развлечения: categorySum.joy,
      Образование: categorySum.education,
      Другое: categorySum.others,
    });
  }, [periodTransactions]);

  return (
    <SContainer $width="789px" $height="540px">
      <SChart__ttl>
        {format(
          Object.values(categorySumVisual).reduce(
            (total, currentValue) => total + currentValue,
            0,
          ),
        )}
      </SChart__ttl>
      {(start || end) && (
        <SChart__description>
          Расходы за{" "}
          {
            <SChart__description__bold>
              {new Date(start)
                .toLocaleDateString("ru-RU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                .slice(0, -3) +
                (start === end
                  ? ""
                  : " — " +
                    new Date(end)
                      .toLocaleDateString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      .slice(0, -3))}
            </SChart__description__bold>
          }
        </SChart__description>
      )}
      {"\u00A0"}
      <SChart__group>
        {Object.keys(categorySumVisual).map((data, index) => (
          <SChart__visual key={index}>
            <SChart__sum
              $height={
                String(
                  348 -
                    (328 * categorySumVisual[data]) /
                      (Math.max(...Object.values(categorySumVisual)) + 1e-9),
                ) + "px"
              }
            >
              {format(categorySumVisual[data])}
            </SChart__sum>
            <SChart__bar
              $height={
                String(
                  4 +
                    (328 * categorySumVisual[data]) /
                      (Math.max(...Object.values(categorySumVisual)) + 1e-9),
                ) + "px"
              }
              $index={index}
            ></SChart__bar>
            <SChart__category>{data}</SChart__category>
          </SChart__visual>
        ))}
      </SChart__group>
    </SContainer>
  );
}

export default Chart;
