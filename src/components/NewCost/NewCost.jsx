import { useState, useContext } from "react";
import { SContainer } from "../../index.styled.js";
import {
  SNewCost__ttl,
  SNewCost__label,
  SNewCost__input,
  SNewCost__wrapper,
  SNewCost__star,
  SNewCost__btnEnter,
  SNewCost__category,
  SNewCost__categories,
  SImg,
} from "./NewCost.styled.js";
import { TransactionContext } from "../../context/TransactionProvider.jsx";
import food from "../../images/food.svg";
import transport from "../../images/transport.svg";
import housing from "../../images/housing.svg";
import joy from "../../images/joy.svg";
import education from "../../images/education.svg";
import others from "../../images/others.svg";
import foodActive from "../../images/food_active.svg";
import transportActive from "../../images/transport_active.svg";
import housingActive from "../../images/housing_active.svg";
import joyActive from "../../images/joy_active.svg";
import educationActive from "../../images/education_active.svg";
import othersActive from "../../images/others_active.svg";

function PopNewCard() {
  const { addNewTransaction } = useContext(TransactionContext);

  const [formData, setFormData] = useState({
    description: "",
    sum: null,
    date: null,
  });

  const [category, setCategory] = useState(null);

  const errorText =
    "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.";

  const [valid, setValid] = useState(false);

  const [errors, setErrors] = useState({
    description: false,
    category: false,
    sum: false,
    date: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = {
      description: false,
      category: false,
      sum: false,
      date: false,
    };
    let isValid = true;

    const wrong = () => {
      setError(errorText);
      isValid = false;
    };

    if (!formData.description.trim() || formData.description.trim().length < 4) {
      newErrors.description = true;
      wrong();
    }
    if (!category) {
      newErrors.category = true;
      wrong();
    }
    if (formData.sum <= 0) {
      newErrors.sum = true;
      wrong();
    }
    if (!formData.date || new Date(formData.date) > new Date()) {
      newErrors.date = true;
      wrong();
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({ ...errors, [name]: false });
    setError("");
    setValid(
      Object.keys(formData).reduce(
        (total, currentValue) => total && formData[currentValue],
        true,
      ),
    );
  };

  const handleCreate = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    addNewTransaction({
      description: formData.description,
      sum: Number(formData.sum),
      category,
      date: new Date(formData.date).setHours(-new Date(formData.date).getTimezoneOffset() / 60),
    });
    setError("");
  };

  return (
    <SContainer $width="379px" $height="618px">
      <SNewCost__ttl>Новый расход</SNewCost__ttl>
      <form>
        <SNewCost__label>Описание</SNewCost__label>
        <SNewCost__star>{errors.description && " *"}</SNewCost__star>
        <SNewCost__wrapper $error={errors.description} $validate={valid}>
          <SNewCost__input
            type="text"
            name="description"
            placeholder="Введите описание"
            onChange={handleChange}
          />
        </SNewCost__wrapper>

        <SNewCost__label>Категория</SNewCost__label>
        <SNewCost__star>{errors.category && " *"}</SNewCost__star>
        <SNewCost__categories>
          <SNewCost__category
            $active={category === "food"}
            onClick={() => setCategory(category !== "food" ? "food" : null)}
          >
            <SImg
              src={category === "food" ? foodActive : food}
              alt="Еда"
            ></SImg>
            <p>Еда</p>
          </SNewCost__category>
          <SNewCost__category
            $active={category === "transport"}
            onClick={() =>
              setCategory(category !== "transport" ? "transport" : null)
            }
          >
            <SImg
              src={category === "transport" ? transportActive : transport}
              alt="transport"
            ></SImg>
            <p>Транспорт</p>
          </SNewCost__category>
          <SNewCost__category
            $active={category === "housing"}
            onClick={() =>
              setCategory(category !== "housing" ? "housing" : null)
            }
          >
            <SImg
              src={category === "housing" ? housingActive : housing}
              alt="Жилье"
            ></SImg>
            <p>Жилье</p>
          </SNewCost__category>
          <SNewCost__category
            $active={category === "joy"}
            onClick={() => setCategory(category !== "joy" ? "joy" : null)}
          >
            <SImg
              src={category === "joy" ? joyActive : joy}
              alt="Развлечения"
            ></SImg>
            <p>Развлечения</p>
          </SNewCost__category>
          <SNewCost__category
            $active={category === "education"}
            onClick={() =>
              setCategory(category !== "education" ? "education" : null)
            }
          >
            <SImg
              src={category === "education" ? educationActive : education}
              alt="Образование"
            ></SImg>
            <p>Образование</p>
          </SNewCost__category>
          <SNewCost__category
            $active={category === "others"}
            onClick={() => setCategory(category !== "others" ? "others" : null)}
          >
            <SImg
              src={category === "others" ? othersActive : others}
              alt="Другое"
            ></SImg>
            <p>Другое</p>
          </SNewCost__category>
        </SNewCost__categories>

        <SNewCost__label>Дата</SNewCost__label>
        <SNewCost__star>{errors.date && " *"}</SNewCost__star>
        <SNewCost__wrapper $error={errors.date} $validate={valid}>
          <SNewCost__input
            type="date"
            name="date"
            //placeholder="Введите дату"
            //value={new Date().toLocaleDateString("en-CA")}

            onChange={handleChange}
          />
        </SNewCost__wrapper>

        <SNewCost__label>Сумма</SNewCost__label>
        <SNewCost__star>{errors.sum && " *"}</SNewCost__star>
        <SNewCost__wrapper $error={errors.sum} $validate={valid}>
          <SNewCost__input
            type="number"
            name="sum"
            placeholder="Введите сумму"
            onChange={handleChange}
          />
        </SNewCost__wrapper>
        <SNewCost__btnEnter onClick={handleCreate}>
          Добавить новый расход
        </SNewCost__btnEnter>
      </form>
    </SContainer>
  );
}

export default PopNewCard;
