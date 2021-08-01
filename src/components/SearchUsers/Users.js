import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useState, useEffect } from "react";
import { useStyles } from "./styles";

const Users = () => {
  const router = useRouter();
  const [findData, setFindData] = useState(null);
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadUser = async () => {
    const res = await axios.get(
      `https://gorest.co.in/public-api/users?name=${router.query.name}`
    );
    setFindData(res?.data?.data);
  };

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Paper style={{ marginTop: 50 }} className={`${classes.container} ${classes.container}`}>
      <TableContainer component={Paper}>
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
            {findData?.length === 0 ? (
              <p style={{ textAlign: "center" }}>There is no user</p>
            ) : (
              findData?.map((user, index) => (
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
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => router.push("/")}
        className={classes.button}
        variant="outlined"
        color="secondary"
      >
        <ArrowBackIcon />
        Back
      </Button>
    </Paper>
  );
};

export default Users;
