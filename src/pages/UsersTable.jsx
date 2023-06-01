import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Table from "../components/Table/Table";
import UserContext from "../contexts/UserContext";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";

function UsersTable() {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-screen-xl w-full px-2 py-3 flex justify-between ">
        <Typography className="mt-4 text-blue-500 text-4xl font-bold">
          User list
        </Typography>
        <Button
          onClick={getUsers}
          className="float-left flex items-center mt-3"
        >
          <ArrowPathIcon className="h-5 me-2" />
          Refresh
        </Button>
      </div>
      <Table />
      <Pagination />
      <Footer />
    </div>
  );
}

export default UsersTable;
