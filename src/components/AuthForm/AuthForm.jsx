import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GlobalStyle,
  SWrapper,
  SContainer,
  SModal,
  SModal__block,
  SModal__ttl,
  SModal__formLogin,
  SModal__input,
  SModal__btnEnter,
  SModal__formGroup,
  SModal__description,
} from "./AuthForm.styled.js";
import { signIn, signUp } from "../../services/authApi.js";
import { AuthContext } from "../../context/AuthProvider.jsx";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
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

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
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
        !isSignUp ? (login(data), navigate("/")) : navigate("/login");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <GlobalStyle />
      <SWrapper>
        <SContainer>
          <SModal>
            <SModal__block>
              <SModal__ttl>
                <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
              </SModal__ttl>
              <SModal__formLogin id="formLog">
                {isSignUp && (
                  <SModal__input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Имя"
                    autoComplete="on"
                    onChange={handleChange}
                    value={formData.name}
                    error={String(errors.name)}
                  />
                )}
                <SModal__input
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  autoComplete="on"
                  onChange={handleChange}
                  value={formData.login}
                  error={String(errors.login)}
                />
                <SModal__input
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  autoComplete="on"
                  onChange={handleChange}
                  value={formData.password}
                  error={String(errors.password)}
                />
                <SModal__description>{error}</SModal__description>
                <SModal__btnEnter
                  as="button"
                  id="btnEnter"
                  onClick={handleSubmit}
                >
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
            </SModal__block>
          </SModal>
        </SContainer>
      </SWrapper>
    </>
  );
};

export default AuthForm;
