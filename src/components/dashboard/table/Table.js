import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "@/redux/actions/admin/project-action";
import { getAllEmployees } from "@/redux/actions/admin/employee-action";
import { Avatar, Box, Grid, Typography } from "@mui/material";
export default function Tables() {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.adminEmployeeReducer);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);
  console.log(employees);

  return (
    <div>
      {
        <Box p={2} className="projectDetail mt-2">
          <Typography
            variant="h3"
            className="fw-semibold mb-2 text-white"
            gutterBottom
          >
            Employees
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="large"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow className="bold">
                      <TableCell sx={{ fontWeight: "bold" }}>Profile</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Last Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Designation
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Phone Number
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {employees &&
                    employees.map(
                      (item) =>
                        item && (
                          <TableBody>
                            <TableCell>
                              <Avatar
                                key={item}
                                alt="img"
                                src={item.displayProfile}
                              />
                            </TableCell>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>{item.designation}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                          </TableBody>
                        )
                    )}
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      }
    </div>
  );
}
