import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import AddProduct from "./components/pages/AddProduct";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-product" component={AddProduct} />
        </Switch>
    );
}

export default Routes;