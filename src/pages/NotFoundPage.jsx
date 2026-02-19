import NotFound from "../components/NotFound/NotFound.jsx";
import Header from "../components/Header/Header.jsx";

const NotFoundPage = () => {
  return (
    <>
        <Header connect={false}/>
        <NotFound />
    </>
  );
};

export default NotFoundPage;