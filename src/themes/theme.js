import { createMuiTheme } from "@material-ui/core"
import purple from '@material-ui/core/colors/purple'

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    primary: {
      main: purple[800],
    }
  }
});