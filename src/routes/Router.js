import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Detail from "./Detail";
import Home from "./Home";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/character/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;