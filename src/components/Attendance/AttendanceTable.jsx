import React, { useRef } from "react";
import { Card, Button } from "@material-tailwind/react";
import propTypes from "prop-types";
import TableHead from "../Table/TableHead";
import AttendanceRow from "./AttendanceRow";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function AttendanceTable({ attendances }) {
  const tableRef = useRef(null);

  const renderedRows = attendances.map((attendance) => {
    return <AttendanceRow key={attendance._id} attandance={attendance} />;
  });

  return (
    <React.Fragment>
      <DownloadTableExcel
        filename="Danh sách điểm danh "
        sheet="Danh sách"
        currentTableRef={tableRef.current}
      >
        <Button className="my-3 flex">
          <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
          Xuất Excel
        </Button>
      </DownloadTableExcel>

      <Card className="overflow-auto max-w-screen-2xl w-full mt-4 border-gray-500">
        <table ref={tableRef} className="min-w-max text-left border-blue-500">
          <TableHead
            headers={[
              "Họ tên",
              "Email",
              "Điểm",
              "Thời gian nộp",
              "Nguy cơ nghỉ học"
            ]}
          />
          <tbody>{renderedRows}</tbody>
        </table>
      </Card>
    </React.Fragment>
  );
}

AttendanceTable.propTypes = {
  attendances: propTypes.array,
};

export default AttendanceTable;
