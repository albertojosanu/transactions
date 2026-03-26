import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SModal__ttl,
  SModal__formLogin,
  SModal__wrapper,
  SModal__input,
  SModal__btnEnter,
  SModal__formGroup,
  SModal__description,
  SModal__star,
} from "./AuthForm.styled.js";
import { SContainer } from "../../index.styled.js";
import { signIn, signUp } from "../../services/authApi.js";
import { AuthContext } from "../../context/AuthProvider.jsx";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const errorText =
    "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку.";

  const [valid, setValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [length, setLength] = useState({
    name: "Имя".length,
    login: "Эл. почта".length,
    password: "Пароль".length,
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    const wrong = () => {
      setError(errorText);
      isValid = false;
    };

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      wrong();
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      wrong();
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      wrong();
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, placeholder } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setLength({
      ...length,
      [name]: value.length !== 0 ? value.length : [placeholder][0].length,
    });

    setErrors({ ...errors, [name]: false });
    setError("");
    setValid(
      Object.keys(formData).reduce(
        (total, currentValue) =>
          total &&
          (currentValue === "name" && !isSignUp
            ? true
            : formData[currentValue]),
        true,
      ),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn(
            JSON.stringify({
              login: formData.login,
              password: formData.password,
            }),
          )
        : await signUp(JSON.stringify(formData));

      if (data) {
        setError(errorText);
        !isSignUp ? (login(data), navigate("/")) : navigate("/login");
      }
    } catch (err) {
      setError(errorText);
    }
  };

  return (
    <SContainer $entry $width="380px">
      <SModal__ttl>{isSignUp ? "Регистрация" : "Вход"}</SModal__ttl>
      <SModal__formLogin id="formLog">
        {isSignUp && (
          <SModal__wrapper $error={errors.name} $validate={valid}>
            <SModal__star $length={length.name} $error={errors.name}>
              {errors.name && "*"}
            </SModal__star>
            <SModal__input
              type="text"
              name="name"
              placeholder="Имя"
              autoComplete="on"
              onChange={handleChange}
              value={formData.name}
              error={String(errors.name)}
              $error={errors.name}
            />
          </SModal__wrapper>
        )}
        <SModal__wrapper $error={errors.login} $validate={valid}>
          <SModal__star $length={length.login} $error={errors.login}>
            {errors.login && "*"}
          </SModal__star>
          <SModal__input
            type="text"
            name="login"
            placeholder="Эл. почта"
            autoComplete="on"
            onChange={handleChange}
            value={formData.login}
            error={String(errors.login)}
            $error={errors.login}
          />
        </SModal__wrapper>
        <SModal__wrapper $error={errors.password} $validate={valid}>
          <SModal__star $length={length.password} $error={errors.password}>
            {errors.password && "*"}
          </SModal__star>
          <SModal__input
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="on"
            onChange={handleChange}
            value={formData.password}
            error={String(errors.password)}
            $error={errors.password}
          />
        </SModal__wrapper>
        <SModal__description>{error}</SModal__description>
        <SModal__btnEnter onClick={handleSubmit} $error={error}>
          {isSignUp ? "Зарегистрироваться" : "Войти"}
        </SModal__btnEnter>
        {!isSignUp ? (
          <SModal__formGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </SModal__formGroup>
        ) : (
          <SModal__formGroup>
            <p>Уже есть аккаунт? </p>
            <Link to="/login">Войдите здесь</Link>
          </SModal__formGroup>
        )}
      </SModal__formLogin>
    </SContainer>
  );
};

export default AuthForm;
