import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Count from './components/Count'
// import Headers from './components/Header'

// import HeroSession from './components/HeroSesion'
// import UserList from './components/userList'
// import Features from './components/Features';
// import ChoosePlan from './components/ChoosePlan'
import SideEffect from './components/SideEffect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Headers title={"LaslesVPN"} />
    <HeroSession />
    <UserList />
    <Features />
    <ChoosePlan/> */}
    {/* <Count/> */}
    <SideEffect/>
  </StrictMode>,
)