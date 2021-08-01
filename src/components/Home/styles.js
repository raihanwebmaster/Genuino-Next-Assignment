  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '2rem',
    display: 'flex',
    padding: '16px',
  },
  searchButton:{
      marginTop: '20px'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  container: {
    width: '100%',
  },
  table: {
    minWidth: 500,
  },
  tableCell: {
    fontWeight: '600',
  },
  click: {
    cursor: 'pointer',
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
}));