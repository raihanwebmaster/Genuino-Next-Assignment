import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import useStyles from "../styles";

const UsersTable = ({ page }) => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const router = useRouter();

  const loadPosts = async () => {
    const res = await axios.get(
      `https://gorest.co.in/public-api/users?page=${page}`
    );
    setUsers(res?.data?.data);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);

  return (
    <Paper elevation={6} className={classes.pagination}>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">
                No.
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user, index) => (
              <TableRow
                onClick={() => router.push(`/user/${user.id}`)}
                className={classes.click}
                key={user.id}
              >
                <TableCell component="th" scope="row" align="center">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell
                  className={
                    user.status === "active" ? classes.green : classes.red
                  }
                  align="left"
                >
                  {user.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UsersTable;
