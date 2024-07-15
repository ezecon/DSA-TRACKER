import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Lists from "../Lists/Lists";
import Arrayindex from "../All/Arrays";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Dashboard/>
        },
        {
            path: "/List/:id",
            element: <Lists/>
        }
        ,
        {
            path: "/arrays",
            element: <Arrayindex/>
        }
    ]
)

export default router;