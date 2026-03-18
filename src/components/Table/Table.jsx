import { useContext } from "react";
import {
  STable__ttl,
  STable__head,
  STable__body,
  STable__column1,
  STable__column2,
  STable__scrolled,
} from "./Table.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";
import { SContainer } from "../../index.styled.js";
import bin from "../../images/bin.svg";

function Table() {
  const { transactions, removeTransaction, setError, format } =
    useContext(TransactionContext);

  return (
    <>
      {/* <hr style={{position: "relative", top: "113.75px"}}/> */}
      <SContainer $width="789px" $height="618px" $noPadding>
        <STable__ttl>Таблица расходов</STable__ttl>

        <STable__head>
          <tbody>
            <tr>
              <STable__column1>Описание</STable__column1>
              <STable__column1>Категория</STable__column1>
              <STable__column1>Дата</STable__column1>
              <STable__column2>Сумма</STable__column2>
              <td></td>
            </tr>
          </tbody>
        </STable__head>
        <STable__scrolled>
          <STable__body>
            <tbody>
              {transactions.map((row) => (
                <tr key={row?._id}>
                  <STable__column1>{row.description}</STable__column1>
                  <STable__column1>
                    {(() => {
                      switch (row.category) {
                        case "food":
                          return "Еда";
                        case "transport":
                          return "Транспорт";
                        case "housing":
                          return "Жилье";
                        case "joy":
                          return "Развлечения";
                        case "education":
                          return "Образование";
                        case "others":
                          return "Другое";
                      }
                    })()}
                  </STable__column1>
                  <STable__column1>
                    {new Date(row.date).toLocaleDateString("ru-RU")}
                  </STable__column1>
                  {/* <td>{(() => {for (let i = Math.floor((String(row.sum).length + 2) / 3); i > 0 ; i--) {console.log(i === 1 ? (String(row.sum).slice(-3)) : (String(row.sum).slice(-3*i, -3*(i-1)) + " "))}})()}</td> */}
                  <STable__column2>{format(row.sum)}</STable__column2>
                  <td>
                    <img
                      src={bin}
                      data-transaction-id={row?._id}
                      onClick={(event) => {
                        removeTransaction(event.target.dataset.transactionId);
                        setError("");
                      }}
                    ></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </STable__body>
        </STable__scrolled>
      </SContainer>
    </>
  );
}

export default Table;
