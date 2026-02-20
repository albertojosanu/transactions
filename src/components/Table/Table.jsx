import { useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionProvider.jsx";
import bin from "../../images/bin.svg";

function Table() {
  const { transactions, removeTransaction, setError, loading } =
    useContext(TransactionContext);
  //const navigate = useNavigate();

  const range = (start, end) =>
    Array.from({ length: start - end + 1 }, (_, i) => start - i);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Описание</td>
            <td>Категория</td>
            <td>Дата</td>
            <td>Сумма</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((row) => (
            <tr key={row?._id}>
              <td>{row.description}</td>
              <td>
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
              </td>
              <td>{new Date(row.date).toLocaleDateString("ru-RU")}</td>
              {/* <td>{(() => {for (let i = Math.floor((String(row.sum).length + 2) / 3); i > 0 ; i--) {console.log(i === 1 ? (String(row.sum).slice(-3)) : (String(row.sum).slice(-3*i, -3*(i-1)) + " "))}})()}</td> */}
              <td>
                {range(Math.floor((String(row.sum).length + 2) / 3), 1).map(
                  (i) =>
                    i === 1
                      ? String(row.sum).slice(-3) + " ₽"
                      : String(row.sum).slice(-3 * i, -3 * (i - 1)) + " ",
                )}
              </td>
              <td>
                <img
                  src={bin}
                  data-transaction-id={row?._id}
                  onClick={(event) => {
                    removeTransaction(event.target.dataset.transactionId);
                    // console.log(event.target.dataset.transactionId)
                    // console.log(event.target.getAttribute('src'))
                    setError("");
                    //navigate("/analysis");
                  }}
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
