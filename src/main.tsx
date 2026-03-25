import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { HeaderC } from './Components/HeaderC/HeaderC.tsx'
import { HomeC } from './Components/Home/HomeC.tsx'
import { Destiantion } from './Components/DestinationC/Destination.tsx'
import { Outlet } from 'react-router-dom'
import { CrewC } from './Components/CrewC/CrewC.tsx'
import { TechnologyC } from './Components/TechnologyC/TechnogogyC.tsx'

const Layout = () => {

  const location = useLocation();
  const pageClass = location.pathname  === '/' ? 'home' : location.pathname.split('/')[1];
return (
    <div className={`page-wrapper ${pageClass}`}>
      <HeaderC />
      <main>
        <Outlet />
      </main>
    </div>
  );

};
const roots = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <HomeC />
      },
      {
        path: 'destination', 
        element: <Destiantion />
      },
      {
        path: 'crew',
        element:<CrewC />
      }
      ,
      {
        path: 'technology',
        element:<TechnologyC />
      }
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={roots} />
)
