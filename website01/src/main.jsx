import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './Github/Github.jsx'
import Privacy from './Privacy/Privacy.jsx'
import Discord from './Discord/Discord.jsx'
import Terms from './Terms/Terms.jsx'
import Facebook from "./Facebook/Facebook.jsx"
import DiscordCommunity from './Discord/DiscordCommunity.jsx'
import Twitter from './Twitter/Twitter.jsx'
import Dribble from './Dribble/Dribble.jsx'
  



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

     //   Same Process

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />}/>
       <Route path='about' element={<About />}/>
       <Route path='contact' element={<Contact />}/>
       <Route path='user/:userid' element={<User/>}/>
       
       <Route 
       loader={githubInfoLoader}
        path='github' 
        element={<Github/>}
        />
        <Route path='privacy' element={<Privacy/>}/>
        <Route path='discord' element={<Discord/>}/>
        <Route path='terms' element={<Terms/>}/>
        <Route path='facebook' element={<Facebook/>}/>
        <Route path='discordcommunity' element={<DiscordCommunity/>}/>
        <Route path='twitter' element={<Twitter/>}/>
        <Route path='dribble' element={<Dribble/>}/>
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
