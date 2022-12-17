const { createBrowserRouter } = require("react-router-dom");
const { default: MainDate } = require("../../components/MainDate/MainDate");

const router = createBrowserRouter([
    {
        path: '/', element: <MainDate></MainDate>
    }
])

export default router;