import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home/Home'
import { Offline } from 'react-detect-offline';
import { MdOutlineWifiOff } from 'react-icons/md'
import Projects from './Pages/Projects/Projects'
import NotFoundPage from './Pages/NotFound/NotFound'
import ContactPage from './Pages/ContactUs/ContactUs'
import AboutMe from './Pages/About/About'
import ServicesPage from './Pages/Services/Services';
import ClientsPage from './Pages/Clients/Clients';


function App() {
  
const myRouter=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<AboutMe/>},
    {path:"projects",element:<Projects/>},
    {path:"services",element:<ServicesPage/>},
    {path:"clients",element:<ClientsPage/>},
    {path:"contact",element:<ContactPage/>},
    {path:"*",element:<NotFoundPage/>}
  ]}
])
  return (
    <>
      <Offline>
            <div className='offline flex items-center p-3 bg-red-500 text-white text-center'>
              Oops... You are offline. Check your connection <MdOutlineWifiOff className='ms-2' />
            </div>
          </Offline>
     <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
