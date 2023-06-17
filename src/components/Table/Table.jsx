import { Card } from "@material-tailwind/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Table() {
  const { users } = useContext(UserContext);

  return (
    <Card className="overflow-auto max-w-screen-xl w-full mt-4 border-gray-500">
      <table className="min-w-max text-left border-blue-500">
        <TableHead
          headers={["Họ tên", "Email", "Ngày tạo tài khoản", "Vai trò", ""]}
        />
        <TableBody users={users} />
      </table>
    </Card>
  );
}

export default Table;
