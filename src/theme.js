import {
    blue900, blue700, blue500,
    blueGrey800, blueGrey500, blueGrey100, blueGrey300,
    darkBlack, white, fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    inkBar: {
        backgroundColor: 'yellow' // TO BE DEFINED XDXD
    },
    palette: {
        primary1Color: blue900,
        primary2Color: blue700,
        primary3Color: blue500,
        accent1Color: blueGrey800,
        accent2Color: blueGrey100,
        accent3Color: blueGrey300,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: blueGrey100,
        pickerHeaderColor: blue500,
        shadowColor: fullBlack
    }
});

export default muiTheme;
