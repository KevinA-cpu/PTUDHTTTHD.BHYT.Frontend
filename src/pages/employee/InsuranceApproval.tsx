import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { stableSort, getComparator } from "../../helpers/sort";
import * as insuranceApprovalServices from "../../services/InsuranceApprovalServices";
import * as customerPolicy from "../../services/customerPolicyServices";

interface Data {
  policyID: number;
  customerID: number;
  customerName: string;
  customerBirthday: string;
  customerSex: string;
  customerPhone: string;
  insuranceID: number;
  insuranceName: string;
  createdDate: string;
  paymentOption: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "customerName",
    numeric: false,
    disablePadding: true,
    label: "Khách Hàng",
  },
  {
    id: "customerBirthday",
    numeric: false,
    disablePadding: false,
    label: "Ngày sinh",
  },
  {
    id: "customerPhone",
    numeric: false,
    disablePadding: false,
    label: "Điện thoại",
  },
  {
    id: "customerSex",
    numeric: false,
    disablePadding: false,
    label: "Giới tính",
  },
  {
    id: "insuranceID",
    numeric: false,
    disablePadding: false,
    label: "Mã gói BH",
  },
  {
    id: "insuranceName",
    numeric: false,
    disablePadding: false,
    label: "Gói BH",
  },
  {
    id: "createdDate",
    numeric: false,
    disablePadding: false,
    label: "Ngày tạo",
  },
];

type Order = "asc" | "desc";
interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  selectedList: readonly any[];
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, selectedList } = props;

  const handleRejectPolicy = () => {
    selectedList.map(async (policyId: number) => {
      try {
        const response = await customerPolicy.rejectCustomerPolicy(policyId);
        console.log("aada", response);
      } catch (error: any) {
        console.log(error.message);
      }
    });
    window.location.reload();
    //console.log("deleted: ", selectedList);
  };

  useEffect(() => {
    console.log("deoodede", selectedList);
  });
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Danh sách yêu cầu mua bảo hiểm
        </Typography>
      )}
      {numSelected > 0 ? (
        <Stack spacing={3} direction="row">
          <Button
            onClick={() => {
              if (numSelected >= 2) {
                alert("vui lòng chọn 1 yêu cầu bảo hiểm để review và phê duyệt!");
              } else {
                alert("câp nhật");
              }
            }}
          >
            {"Review"}
          </Button>
          <Tooltip title="More detail">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Loại bỏ">
            <IconButton onClick={() => handleRejectPolicy()}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function InsuranceApprovalTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("insuranceID");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<Data[]>([]);

  useEffect(() => {
    void getInsuranceApprovalList();
  }, []);

  const getInsuranceApprovalList = async () => {
    try {
      const response = await insuranceApprovalServices.getInsuranceApprovalList();
      console.log("aada", response);
      setRows(response);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.policyID);
      console.log("deded", newSelected);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRowClick = (event: React.MouseEvent<unknown>, id: number) => {
    console.log("dêde", event);
    console.log("id", id);
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    console.log("selected : ", selected);
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const visibleRows = useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [rows, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", mx: 3, mb: 5, mt: 2 }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} selectedList={selected} />
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table sx={{ minWidth: 750 }} stickyHeader aria-label="sticky table" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.policyID);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleRowClick(event, row.policyID)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.policyID}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox" sx={{ width: "6rem" }}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.customerName}
                    </TableCell>
                    <TableCell align="center">{row.customerBirthday}</TableCell>
                    <TableCell align="center">{row.customerPhone}</TableCell>
                    <TableCell align="center">{row.customerSex}</TableCell>
                    <TableCell align="center">{row.insuranceID}</TableCell>
                    <TableCell align="left">{row.insuranceName}</TableCell>
                    <TableCell align="center">{row.createdDate}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={
          <Switch
            checked={dense}
            onChange={(event) => {
              setDense(event.target.checked);
            }}
          />
        }
        label="Dense padding"
      />
    </Box>
  );
}
