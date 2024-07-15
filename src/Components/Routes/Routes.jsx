import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Lists from "../Lists/Lists";

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
    ]
)

export default router;