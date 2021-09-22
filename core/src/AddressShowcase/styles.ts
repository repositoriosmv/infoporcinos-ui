import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  ShowcaseContainer: {
    width: "100%",
    fontFamily: "Roboto, arial",
    display: "flex",
    justifyContent: "center",
    alignItems: "top"
  },
  AddressAppend: {
    height: "100%",
    margin: theme.spacing(1.25, 1),
    fontSize: 19
  },
  AddressItem: {
    margin: 10,
    textAlign: "center"
  },
  AddressField: {
    fontSize: 19
  },
  AddressUnderline: {
    width: "100%",
    height: 4,
    border: "2px #DD9835 solid",
    borderTop: 0
  },
  AddressLabel: {
    marginTop: 3,
    fontSize: 10,
    color: "#AFAFAF"
  }
}))
