import { useState, useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../index.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";
import food from "../../images/food.svg";
import transport from "../../images/transport.svg";
import housing from "../../images/housing.svg";
import joy from "../../images/joy.svg";
import education from "../../images/education.svg";
import others from "../../images/others.svg";

function PopNewCard() {
  const { addNewTransaction, setError, loading } =
    useContext(TransactionContext);

  const [formData, setFormData] = useState({
    description: "",
    sum: 0,
    date: new Date(),
  });

  const [category, setCategory] = useState("food");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let message = "Введите";

  //const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();

    if (!formData.description || !formData.sum) {
      if (!formData.description) {
        message = message + " описание";
      }

      if (!formData.sum) {
        if (!formData.description) {
          message = message + " и";
        }
        message = message + " сумму";
      }

      setError(message);
      message = "Введите";
      return;
    }

    addNewTransaction({
      description: formData.description,
      sum: Number(formData.sum),
      category,
      date: formData.date.setHours(-formData.date.getTimezoneOffset() / 60),
    });
    setError("");
    //navigate("/list");
  };

  return (
    <>
      <GlobalStyle />
      <div className="pop-new-card">
        <h3 className="pop-new-card__ttl">Новый расход</h3>
        {/* <div className="pop-new-card__wrap"> */}
        <form className="pop-new-card__form form-new">
          <div className="form-new__block">
            <label htmlFor="formTitle" className="subttl">
              Описание
            </label>
            <input
              className="form-new__input"
              type="text"
              name="description"
              //id="formTitle"
              placeholder="Введите описание"
              autoFocus
              onChange={handleChange}
            />
          </div>

          <div className="pop-new-card__categories categories">
            <p className="categories__p subttl">Категория</p>
            <div className="categories__themes">
              <div
                className={`categories__theme ${category === "food" && " _active-category"}`}
                onClick={() => setCategory("food")}
              >
                <img src={food} alt="Еда"></img>
                <p>Еда</p>
              </div>
              <div
                className={`categories__theme ${category === "Транспорт" && " _active-category"}`}
                onClick={() => setCategory("transport")}
              >
                <img src={transport} alt="transport"></img>
                <p>Транспорт</p>
              </div>
              <div
                className={`categories__theme ${category === "housing" && " _active-category"}`}
                onClick={() => setCategory("housing")}
              >
                <img src={housing} alt="Жилье"></img>
                <p>Жилье</p>
              </div>
              <div
                className={`categories__theme ${category === "joy" && " _active-category"}`}
                onClick={() => setCategory("joy")}
              >
                <img src={joy} alt="Развлечения"></img>
                <p>Развлечения</p>
              </div>
              <div
                className={`categories__theme ${category === "education" && " _active-category"}`}
                onClick={() => setCategory("education")}
              >
                <img src={education} alt="Образование"></img>
                <p>Образование</p>
              </div>
              <div
                className={`categories__theme ${category === "others" && " _active-category"}`}
                onClick={() => setCategory("others")}
              >
                <img src={others} alt="Другое"></img>
                <p>Другое</p>
              </div>
            </div>
          </div>

          <div className="form-new__block">
            <label htmlFor="textArea" className="subttl">
              Дата
            </label>
            <input
              className="form-new__input"
              type="date"
              name="date"
              //id="formTitle"
              //placeholder="Введите дату"
              value={new Date().toLocaleDateString("en-CA")}
              autoFocus
              onChange={handleChange}
            />
          </div>

          <div className="form-new__block">
            <label htmlFor="textArea" className="subttl">
              Сумма
            </label>
            <input
              className="form-new__input"
              type="number"
              name="sum"
              //id="formTitle"
              placeholder="Введите сумму"
              autoFocus
              onChange={handleChange}
            />
          </div>

          <button
            className="form-new__create _hover01"
            id="btnCreate"
            onClick={handleCreate}
          >
            Добавить новый расход
          </button>
        </form>

        {/* </div> */}
      </div>
    </>
  );
}

export default PopNewCard;

// function NewCost() {

//   return (
//     <>
//     </>
//   );
// }

// export default NewCost;
