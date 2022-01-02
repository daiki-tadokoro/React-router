import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {/* <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`} render={() => <Page1DetailA />} />
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route> */}
              {/* ループ処理に変更 */}
              {Page1Routes.map((route) => (
                <Router key={route.path} exact={route.exact} path=`${url}${route.path}`>
                  {route.children}
                </Router>
              ))}
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </>
  );
};
