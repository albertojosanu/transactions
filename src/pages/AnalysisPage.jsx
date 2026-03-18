import Calendar from "../components/Calendar/Calendar.jsx";
import Chart from "../components/Chart/Chart.jsx";
import { STitle, SWindow } from "../index.styled.js";

const AnalysisPage = () => {
  return (
    <>
      <STitle>Анализ расходов</STitle>
      <SWindow>
        <Calendar />
        <Chart />
      </SWindow>
    </>
  );
};

export default AnalysisPage;
