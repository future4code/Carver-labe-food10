import { BrowserRouter } from "react-router-dom"
import RestaurantsDetails from "../RestaurantsDetail/RestaurantsDetails"

const Router = () =>{

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/detalhe/:id">
                    <RestaurantsDetails/>
                </Route>

            </Switch>
        
        </BrowserRouter>

    )



}

export default Router;