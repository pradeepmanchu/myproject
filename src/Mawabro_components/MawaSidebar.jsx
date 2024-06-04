import React, { useState } from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { MdMessage } from "react-icons/md";








import { GrShieldSecurity } from "react-icons/gr";

import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from "react-pro-sidebar";
import { Dashboardmawa } from "./Dashboardmawa.jsx";
import Myprojects from "./Myprojects.jsx";
import Myfavourites from "./Myfavourites.jsx";
import { Myproposalsent } from "./Myproposalsent.jsx";
import './MawaSidebar.css';

const Layout = () => {
    const [DashBoard,setDashBoard]=useState(true);
    const [favourites,setFavourites]=useState(false);
    const [proposalSent,setProposalSent]=useState(false);
     const [projects,setProjects]=useState(false);
    // const [Account,setAccount]=useState(false);


    function DashBoardfunc(prev){
        setDashBoard(true)
        setFavourites(false)
        setProposalSent(false)
        setProjects(false)
    }
    function Favouritesfunc(prev){
        setDashBoard(false)
        setFavourites(true)
        setProposalSent(false)
        setProjects(false)
    }
    function ProposalSentfunc(prev){
        setDashBoard(false)
        setFavourites(false)
        setProposalSent(true)
        setProjects(false)
    }
    function Projectsfunc(prev){
        setDashBoard(false)
        setFavourites(false)
        setProposalSent(false)
        setProjects(true)
    }
   
   



  return (
    <>
      <div className="row">
        <div className="sidebar col-3">
            <ProSidebarProvider>
           
           <Sidebar >
            <Menu className="fw-bold">
              
              <MenuItem icon={<GrProjects/>} onClick={DashBoardfunc} >  DashBoard </MenuItem>
              <MenuItem icon={<GoProjectRoadmap/>} onClick={ Projectsfunc} > Projects </MenuItem>
              <MenuItem icon={<MdMessage/>} onClick={ProposalSentfunc} >  Praposal Sent </MenuItem>
              {/* <MenuItem icon={<GrShieldSecurity />} onClick={ProposalSentfunc} > Portfolios </MenuItem> */}
              <MenuItem icon={<MdFavoriteBorder />} onClick={Favouritesfunc} > My Favourites</MenuItem>
              
            </Menu>
          </Sidebar>
          </ProSidebarProvider>
        
        </div>
        <div className="sidebar col-8">
            {DashBoard && <Dashboardmawa/>}
            {proposalSent && <Myproposalsent/>}
            {favourites && <Myfavourites/>}
            {projects && <Myprojects/>}
            </div>
      </div>
    </>
  )
};

export default Layout;