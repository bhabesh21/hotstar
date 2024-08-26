



import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SidebarPage from '../../Sidebar/sidebar';
import LayoutDesign from '../LayoutPage/Layoutpage';
import Loginpage from '../LoginPage/Loginpage';
import Homepage from '../HomePage/Homepage';
import Tvpage from '../TvPage/Tvpage';

export default function HotstarRoutePage() {
   
    let routes = useRoutes([ 
        { 
            path: '/',
            element:<LayoutDesign/>,
            // element: <Login/>,
            // element: <LayoutDesign />,
          
            children: [
                { path: '/home', element: <Homepage /> },
                { path: '/tv', element: <Tvpage /> },

            ] 
        },
        { path: 'login', element: <Loginpage /> },
    ])
    return routes;
}

