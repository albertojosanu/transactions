import Table from "../components/Table/Table.jsx";
import NewCost from "../components/NewCost/NewCost.jsx";

const ListPage = () => {
  return (
    <>
    <div>Мои расходы</div>
      <Table />
      <NewCost />
    </>
  );
};

export default ListPage;