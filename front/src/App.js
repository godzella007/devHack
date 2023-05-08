import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import RestPassword from "./app/components/ResetPassword"
import Login from "./app/components/Login";
import Register from "./app/components/Register";
import Home from "./app/components/Home";
import Profile from "./app/components/Profile";
import BoardUser from "./app/components/BoardUser";
import BoardModerator from "./app/components/BoardModerator";
import BoardAdmin from "./app/components/BoardAdmin";
import Tutorial from "./app/components/tutorialcomponent";
import TutorialsList from "./app/components/tutorials-listcomponent";
import AddTutorial from "./app/components/add-tutorialcomponent";
import Hackathons from "./app/components/hackathons";
import { logout } from "./app/slices/auth";

import EventBus from "./app/common/EventBus";
import EditProfile from "./app/components/EditProfile";
import Ajouter from "./app/components/Ajouter";
import FormolairAcces from "./app/components/FormolairAcces";


function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [infoProfil, setInfoProfil] = useState();
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
//useeffect appel userService.get(currenetUser.id) setProfil(res.data)
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowUserBoard(currentUser.roles.includes("ROLE_USER"))
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setShowUserBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
   
    <Router>
    <div id="main-wrapper">
    <div className="nav-header">
      <a href="index.html" className="brand-logo">
      
      </a>
      
      <div className="nav-control">
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
      <div className="header">
                       <div className="header-content">
                         <nav className="navbar navbar-expand">
                           <div className="collapse navbar-collapse justify-content-between">
                             <div className="header-left">
                               
                             </div>
                             <ul className="navbar-nav header-right">
                               <li className="nav-item dropdown notification_dropdown">
                               <a class="nav-link " href=";" data-bs-toggle="dropdown">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8067 7.62358L20.1842 6.54349C19.6577 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83669 3.19795 9.63717 3.68456 9.63961 4.19109V4.19109C9.6246 5.23689 8.77248 6.07678 7.72657 6.07667C7.40421 6.07332 7.08846 5.98491 6.81123 5.82038V5.82038C5.89606 5.29598 4.72911 5.61126 4.20254 6.52519L3.53435 7.62358C3.00841 8.53636 3.3194 9.70258 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8067 7.63274V7.63274V7.62358Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12.1751" cy="11.889" r="2.63616" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

                      </a>
                                 <div className="dropdown-menu dropdown-menu-end">
                                   <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 p-3 height370">
                                     <ul className="timeline">
                                       <li>
                                         <div className="timeline-badge primary"></div>
                                         <a className="timeline-panel text-muted" href=";">
                                           <span>10 minutes ago</span>
                                           <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                         </a>
                                       </li>
                                     </ul>
                                   </div>
                                 </div>
                               </li>
                               <li className="nav-item dropdown notification_dropdown">
                               <a class="nav-link" href=";" role="button" data-bs-toggle="dropdown">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg></a>
                                 <div className="dropdown-menu dropdown-menu-end">
                                   <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{ height: "380px" }}>
                                   </div>
                                   <a className="all-notification" href=";">See all notifications <i className="ti-arrow-end"></i></a>
                                 </div>
                               </li>
                               {currentUser ? (
                               <li className="nav-item ps-3">
                                 <div className="dropdown header-profile2">
                                   <a className="nav-link" href=";" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <div className="header-info2 d-flex align-items-center">
                                       <div className="header-media">
                                         <img src="aymen.jpg" alt="" />
                                       </div>
                                       <div className="header-info">
                                         <h6>{currentUser.username}</h6>
                                       </div>
                                     </div>
                                   </a>
                                   <div className="dropdown-menu dropdown-menu-end" >
                                     <div className="card border-0 mb-0">
                                       <div className="card-header py-2">
                                         <div className="products">
                                           <img src="aymen.jpg" className="avatar avatar-md" alt="" />
                                           <div>
                                             <h5>{currentUser.username}</h5>
                                             <span>{currentUser.mail}</span>	
                                           </div>
                                         </div>
                                       </div>
                                       
                                       
                                      
                                         
                                                        <div className="card-footer px-0 py-2">
                                      
                                       <li className="nav-item">
                <a href="/login" className="nav-link" >
                  <button onClick={logOut} className="btn btn-outline-info" size="10px" >logOut</button>
          
                </a>
              </li>
												                
                                  </div>
									
										</div>
									</div>
								</div>
							</li>
               ) : (
              <li className="nav-item ps-3">
                                 <div className="dropdown header-profile2">
                                   <a className="nav-link" href=";" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <div className="header-info2 d-flex align-items-center">
                                       
                                       <div className="header-info">
                                         <h6>Account</h6>
                                       </div>
                                     </div>
                                   </a>
                                   <div className="dropdown-menu dropdown-menu-end" >
                                     <div className="card border-0 mb-0">
                                    
                                       
                                       
                                      
                                            <div className="card-footer px-0 py-2">
                                                    <Link to={"/Login"}  class="dropdown-item ai-icon">
													
													                             <span class="ms-2">Login </span>
												                                </Link>
                                                        </div>
                                                        <div className="card-footer px-0 py-2">
                                              <Link to={"/Register"}  class="dropdown-item ai-icon">
													
													                      <span class="ms-2">Register</span>
                         
												                       </Link>
                                            </div>
                                                 
									
										</div>
									</div>
								</div>
							</li>
                )}
                        </ul>
                        
                    </div>
				</nav>  
      
			</div>
		</div>
    
    {showUserBoard &&( 
 <BoardUser/>
 )}
{ showAdminBoard &&(
<BoardAdmin/>
)}
{
  showModeratorBoard &&(
    <BoardModerator/>
  )
}


  
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
            <Route path="/RestPassword" element={<RestPassword/>} />
            <Route path="/EditProfile" element={<EditProfile/>} />
            <Route path="/hackathons" element={<Hackathons/>} />
            <Route path="/Ajouter" element={<Ajouter/>} />
            <Route path="/FormolairAcces" element={<FormolairAcces/>} />

            </Routes>
            </div>
      </Router>

  );
}

export default App;
