import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
  
  renderProjectExmaple() {
    if (this.props.project.projectUrl) {
      return <a href={ this.props.project.projectUrl} target="_blank">View Here</a>;
    } else {
      return <div></div>;
    }
  };
  
  render() {

    if (!this.props.project) {
      return <div></div>;
    } 

    return (

      <div className={ `container_project_detail ${ this.props.project.bg }` }>
        <div className="inner_project_detail fixed_width">

        <div><img 
        src={ this.props.project.imageUrl }
        className="project_detail_image" 
        alt=""/></div>

        <div className="project_title">{ this.props.project.title }</div>

        <div className="project_tech">{ this.props.project.tech }
        </div>

        <div className="project_desc">{ this.props.project.description }</div>
        
        <div 
          className="project_example">
          { this.renderProjectExmaple() }
        </div>
        
       

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.activeProject
  };
}

export default connect(mapStateToProps)(ProjectDetail);