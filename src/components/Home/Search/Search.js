
import { Grid, AppBar, TextField, Button } from "@material-ui/core";
import useStyles from "../styles";
import { useState } from "react";
import Link from "next/dist/client/link";
const Search = () => {
  const [userName, setUserName] = useState("");

  const classes = useStyles();

  return (
    <Grid>
      <AppBar
        className={classes.appBarSearch}
        position="static"
        color="inherit"
      >
        <TextField
          name="search"
          variant="outlined"
          label="Search Users"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        
        <Link
          href={{
            pathname: '/users',
            query: {
              name: userName,
            },
          }}
          variant="contained"
          color="primary"
        >
          <Button
          className={classes.searchButton}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
        </Link>

      </AppBar>
    </Grid>
  );
};

export default Search;
