import Table from "../components/Table/Table.jsx";
import NewCost from "../components/NewCost/NewCost.jsx";
import { STitle, SWindow } from "../index.styled.js";

const ListPage = () => {
  return (
    <>
      <STitle>Мои расходы</STitle>
      <SWindow>
        <Table />
        <NewCost />
      </SWindow>
    </>
  );
};

export default ListPage;
