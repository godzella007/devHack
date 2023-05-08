import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../slices/tutorials";
import { Link } from "react-router-dom";

class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);

    this.state = {
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    this.props
      .deleteAllTutorials()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findTutorialsByTitle({ title: this.state.searchTitle });
  }

  render() {
    const { searchTitle, currentTutorial, currentIndex } = this.state;
    const { tutorials } = this.props;

    return (
      <>
      <div className="content-body">
        	<div className="page-titles">
					<ol className="breadcrumb">
						<li className=""><a href="">Hacktons --- /</a></li>
						<li className="breadcrumb-item active"><a href="">list</a></li>
					</ol>
                </div>

                <div className="container-fluid">
                  
                  
                  <div className="list row">
       
        <div className="col-md-6">
          <h4>List de ajouter </h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

         
        </div>
       
       
   </div>
                
                
                
   <div className="element-area">
					<div className="demo-view">
						<div className="container-fluid pt-0 ps-0 pe-lg-0 pe-0">
			
						<div className="col-xl-12">
							<div className="card dz-card" id="accordion-three">
								<div className="card-header flex-wrap d-flex justify-content-between">
                <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
								
								</div>
							   
								
									<div className="tab-content" id="myTabContent-2">
										<div className="tab-pane fade show active" id="withoutSpace" role="tabpanel" aria-labelledby="home-tab-2">
											 <div className="card-body pt-0">
												<div className="table-responsive">
													<table id="example3" className="display table">
														<thead>
															<tr>
																<th></th>
																<th>Name</th>
																<th>Department</th>
																<th>Gender</th>
																
																<th>Action</th>
															</tr>
														</thead>
														<tbody>
                            {tutorials &&
              tutorials.map((tutorial, index) => (
															<tr>
																<td><img className="rounded-circle" width="35" src="images/profile/small/pic1.jpg" alt=""/></td>
																<td> {tutorial.title}</td>
																<td>  {tutorial.title}</td>
																<td>{tutorial.title}</td>
														
																<td>
																	<div className="d-flex">
																		<a href={"/tutorials/" + tutorial.id} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
																		<a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
																	</div>												
																</td>												
															</tr>
														  ))}
                            
														</tbody>
													</table>
												</div>
											</div>
										</div>
									
									</div>
							
							   
							</div>
						</div>
                   
            </div>   				</div>       
                


</div>
      
  </div></div>
  <div className="col-md-6">
          {currentTutorial ? (
           <div>
           <h4>hackathons ajouter</h4>
           <div>
             <label>
               <strong>Nom de Entriprise :</strong>
             </label>{" "}
             {currentTutorial.NomEntriprise}
           </div>
           <div>
             <label>
               <strong> Title de Projet:</strong>
             </label>{" "}
             {currentTutorial.title}
           </div>
           <div>
             <label>
               <strong>Number de Equipe :</strong>
             </label>{" "}
             {currentTutorial.Numbre_Equipe}
           </div>

           <div>
             <label>
               <strong>Description de Projet:</strong>
             </label>{" "}
             {currentTutorial.description}
           </div>
       
           <div>
             <label>
               <strong>Date début :</strong>
             </label>{" "}
             {currentTutorial.Date_début}
           </div>
           <div>
             <label>
               <strong>Date fin :</strong>
             </label>{" "}
             {currentTutorial.Date_fin}
           </div>
           <div>
             <label>
               <strong>Rules :</strong>
             </label>{" "}
             {currentTutorial.Rules}
           </div>
         

           <Link
           
             to={"/tutorials/" + currentTutorial.id}
             className="badge badge-warning"
           >
            view
           </Link>
         </div>
         
       ) : (
         <div>
           <br />
           
           <p>Please click on a Projet.</p>
         </div>
       )}
     </div>
   </>
      
 );
}

}

const mapStateToProps = (state) => {
  return {
    tutorials: state.tutorials,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
})(TutorialsList);
