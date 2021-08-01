import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const UserDetails = ({ userId }) => {
  const [user, setUser] = useState({});
  const classes = useStyles();
  const router = useRouter();

  const loadPosts = async () => {
    const res = await axios.get(
      `https://gorest.co.in/public-api/users/${userId}`
    );
    setUser(res?.data?.data);
  };
  useEffect(() => {
    loadPosts();
  }, [userId]);

  return (
    <Paper style={{ marginTop: 50 }} elevation={6} className={`${classes.pagination} ${classes.container}`}  >
   
      <Button
        onClick={() => router.push("/")}
        className={classes.button}
        variant="outlined"
        color="secondary"
      >
        <ArrowBackIcon />
        Back
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">
                ID No.
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Gender
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Email
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.gender}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell
                className={
                  user.status === "active" ? classes.green : classes.red
                }
                align="center"
              >
                {user.status}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  
    </Paper>
  );
};

export default UserDetails;
