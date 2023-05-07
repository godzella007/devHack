import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import UserService from "../services/user.service";
import tutorialService from "../services/tutorial.service";
const Home = () => { const [count,setCount] = useState(0); 
  const [tutorials,setTutorials] = useState({});
  const [use,setuse] = useState(0); 
  const [ User,setusers] = useState({});
   
  useEffect(() => {
    tutorialService.getAll()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        setTutorials(res.data);
        console.log(res.data.length);
        setCount(res.data.length)
      }).catch((err)=>{console.log(err)})
  }, []);
  useEffect(() => {
    UserService.getPublicContent()
      .then((res) => {
        console.log('--------------------------------')
        console.log(res.data.length)
        console.log('--------------------------------')
        setusers(res.data);
        console.log(res.data.length);
        setuse(res.data.length)
      }).catch((err)=>{console.log(err)})
  }, []);

  return (
    <div className="content-body">
    <div class="container-fluid">
    <div class="row">
    <div class="col-xl-3 col-sm-6 same-card">
								<div class="card">
									<div class="card-body depostit-card">
										<div class="depostit-card-media d-flex justify-content-between style-1">
											<div>
												<h6>Total Hackathon</h6>
												<h3>{count}</h3>
											</div>
											<div class="icon-box bg-primary-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
<path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
<path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
</svg>

											</div>
										</div>
										<div class="progress-box mt-0">
											<div class="d-flex justify-content-between">
												<p class="mb-0">Total Not Finished</p>
											
											</div>
											<div class="progress">
                      <div
    className="progress-bar bg-primary"
    role="progressbar"
    style={{ width: "12%", height: "5px", borderRadius: "4px" }}
    aria-valuenow={50}
    aria-valuemin={0}
    aria-valuemax={100}
  ></div>
											</div>
										</div>
									</div>
								</div>
							</div>

<div class="col-xl-3 col-sm-6 same-card">
								<div class="card">
									<div class="card-body depostit-card">
										<div class="depostit-card-media d-flex justify-content-between style-1">
											<div>
												<h6>Total Participant</h6>
												<h3>{use}</h3>
											</div>
											<div class="icon-box bg-primary-light">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

											</div>
										</div>
										<div class="progress-box mt-0">
											<div class="d-flex justify-content-between">
												<p class="mb-0">Total Not Finished</p>
												
											</div>
											<div class="progress">
                      <div
    className="progress-bar bg-primary"
    role="progressbar"
    style={{ width: "50%", height: "5px", borderRadius: "4px" }}
    aria-valuenow={50}
    aria-valuemin={0}
    aria-valuemax={100}
  ></div>
											</div>
										</div>
									</div>
								</div>
							</div>
  </div>
</div>
</div> 
  );
};

       
      

export default Home
