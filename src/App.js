import Start from "./components/Start";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Board from "./components/Board";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";

const theme = {
    colors: {
        darkNavy: "#1A2A33",
        semiDarkNavy: "#1F3641",
        silver: "#A8BFC9",
        sliverHover: "#DBE8ED",
        lightBlue: "#31C3BD",
        lightBlueHover: "#65E9E4",
        lightYellow: "#F2B137",
        lightYellowHover: "#FFC860",
        boxShadowCard: "#10212a",
        boxShadowYellow: "#CC8B13",
        boxShadowBlue: "#118C87",
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/start-menu" />
                </Route>
                <Route path="/start-menu">
                    <Start />
                </Route>
                <Route path="/start-game">
                    <Board />
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
