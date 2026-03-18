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

  // let categorySum_test = categorySum;

  let categorySum = {
    food: 0,
    transport: 0,
    housing: 0,
    joy: 0,
    education: 0,
    others: 0,
  };

  //   const [categorySum_test, setCategorySum_test] = useState(
  //   categorySum
  // );

  //   useEffect(() => {
  //   setCategorySum(categorySum)
  // }, [categorySum]);

  // const memoizedValue = useMemo(() => categorySum, [periodTransactions])

  // useEffect(() => {
  //   updateTransactions();
  //   navigate("/list");
  // }, [updateTransactions]);

  useEffect(() => {
    //     console.log(Object.keys(categorySum).forEach((key) => {setCategorySum(
    //          {
    //            ...categorySum,
    //   key: periodTransactions.filter((data) => data.category === `${key}`).reduce((total, element) => total + element.sum, 0)});
    // }));

    //         Object.keys(categorySum).map((key) => {
    //           setCategorySum(
    //          {
    //            ...categorySum,
    //   [key]: periodTransactions.filter((data) => data.category === String([key])).reduce((total, element) => total + element.sum, 0)}), console.log(key, categorySum)
    // })

    // Object.entries(categorySum).forEach(([key, value]) => {
    //     categorySum[key] = periodTransactions.filter((data) => data.category === key).reduce((total, element) => total + element.sum, 0);
    // });

    Object.keys(categorySum).forEach((key) => {
      categorySum[key] = periodTransactions
        .filter((data) => data.category === key)
        .reduce((total, currentValue) => total + currentValue.sum, 0);
    });

    //                setCategorySum(
    //                   Object.keys(categorySum).map((key) => {
    //     key: periodTransactions.filter((data) => data.category === String(key)).reduce((total, element) => total + element.sum, 0)
    //   })
    // );
    // console.log(categorySum)

    // for (let key in categorySum) {
    //   setCategorySum(
    //           {
    //             ...categorySum,
    //    [key]: periodTransactions.filter((data) => data.category === String([key])).reduce((total, element) => total + element.sum, 0)});
    // }

    //     setCategorySum(
    //       {
    //         ...categorySum,
    //     food: periodTransactions.filter((data) => data.category === "food").reduce((total, element) => total + element.sum, 0),
    //   }
    // );
    //console.log(categorySum);
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
      {/* <div
        // onClick={() => {
        //   console.log(periodTransactions, categorySumVisual);
        //   filterTransactions("sum", "food,transport");
        //   updateTransaction({
        //     "description": "new Description",
        //     "sum": 35000,
        //     "category": "transport",
        //     "date": "12-12-2025"
        //   }, "6936944ca8ed11a81b401bfc")
        // }}
      >
        clickMe
      </div> */}
      <SChart__ttl>
        {format(
          Object.values(categorySumVisual).reduce(
            (total, currentValue) => total + currentValue,
            0,
          ),
        )}
        {/* {range(Math.floor((String(Object.values(categorySumVisual).reduce((total, currentValue) => total + currentValue, 0)).length + 2) / 3), 1).map(
                  (i) =>
                    i === 1
                      ? String(Object.values(categorySumVisual).reduce((total, currentValue) => total + currentValue, 0)).slice(-3) + " ₽"
                      : String(Object.values(categorySumVisual).reduce((total, currentValue) => total + currentValue, 0)).slice(-3 * i, -3 * (i - 1)) + " ",
                )} */}

        {/* {Object.values(categorySumVisual).reduce((total, currentValue) => total + currentValue, 0)} */}
      </SChart__ttl>
      {/* <SChart__description>{(start || end) && "Расходы за " + (<SChart__description__bold>{new Date(start).toLocaleDateString("ru-RU", { year: 'numeric', month: 'long', day: 'numeric' }).slice(0, -3) + (start === end ? "" : (" — " + new Date(end).toLocaleDateString("ru-RU", { year: 'numeric', month: 'long', day: 'numeric' }).slice(0, -3)))}</SChart__description__bold>)}</SChart__description> */}
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
        {/* {Object.keys(categorySum).forEach((key) => (<div><div>{categorySumVisual.food}</div><div style={{height: String(100 * categorySumVisual.food/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div>


      // categorySum[key] = periodTransactions
      //   .filter((data) => data.category === key)
      //   .reduce((total, element) => total + element.sum, 0);



    ))} */}

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

        {/* <div><div>{categorySumVisual.food}</div><div style={{height: String(100 * categorySumVisual.food/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div>
        <div><div>{categorySumVisual.transport}</div><div style={{height: String(100 * categorySumVisual.transport/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div>
        <div><div>{categorySumVisual.housing}</div><div style={{height: String(100 * categorySumVisual.housing/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div>
        <div><div>{categorySumVisual.joy}</div><div style={{height: String(100 * categorySumVisual.joy/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div>
        <div><div>{categorySumVisual.education}</div><div style={{height: String(100 * categorySumVisual.education/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div>
        <div><div>{categorySumVisual.others}</div><div style={{height: String(100 * categorySumVisual.others/Math.max(...Object.values(categorySumVisual))) + "px"}}></div></div> */}

        {/* <div>{periodTransactions.length > 3 ? "a" : "b"}</div> */}
      </SChart__group>
    </SContainer>
  );
}

export default Chart;
