import React, { Component } from 'react';


// Import connect function from react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Action
import { selectProject } from '../actions/index';



class ProjectList extends Component {
  
  renderProjectList() {
    return this.props.projects.map((project) => {
      return (
        <li
        key={ project.title }
        onClick={ () => this.props.selectProject(project) }
        className="project_list_item">
        
        { project.title }
        
        </li>
      );
    });
  }
  
  render() {
    
    return (
        <div>

          <div className="project_hero full_width">
          </div>

          <div className="container_project full_width">
            <div className="inner_project fixed_width padding_lr">

              <h3>PROJECTS</h3>
              <h1>MY<br/>SELECTED WORK</h1>
              <p>SIMPLE &amp; RESPONSIVE</p>
            
            </div>
          </div>

          <div className="container_project_list full_width">
            <div className="inner_project_list fixed_width padding_lr">
              <h3>CLICK TO VIEW</h3>

              <ul 
              className="project_list">
                { this.renderProjectList() }
              </ul>

            </div>
          </div>
            


        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ selectProject: selectProject }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
