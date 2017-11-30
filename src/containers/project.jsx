import React, { Component } from 'react';

import ProjectList from '../containers/project_list';
import ProjectDetail from '../containers/project_detail';




export default class Project extends Component {
  render() {
    return (
      <div>
        <ProjectList />
        <ProjectDetail />
      </div>
    );
  }
}


