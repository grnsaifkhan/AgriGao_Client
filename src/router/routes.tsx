import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
        ]
    },
    {
        path: '*',
        element: <h2>Not Found</h2>
    }
], {basename: "/"})


export default router;