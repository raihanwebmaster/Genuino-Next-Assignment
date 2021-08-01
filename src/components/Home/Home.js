import React, { useState, useEffect } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import UsersTable from "./UserTable/UsersTable";
import Search from "./Search/Search";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(1);

  const loadPages = async () => {
    const res = await axios.get(
      `https://gorest.co.in/public-api/users?page=${page}`
    );
    setTotalPages(res?.data?.meta?.pagination);
  };
  useEffect(() => {
    loadPages();
  }, [page]);

  return (
    <Container>
      <div style={{ marginTop: 50 }}>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <UsersTable page={page} />
          </Grid>
          <Grid style={{ marginTop: 18 }} item lg={4}>
            <Search />
            <Paper elevation={6} className={classes.pagination}>
              <Pagination
                count={totalPages.pages}
                color="secondary"
                variant="outlined"
                onChange={(e, value) => setPage(value)}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
