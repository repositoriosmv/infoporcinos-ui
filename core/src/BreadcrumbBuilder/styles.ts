import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  current: {
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

export default useStyles