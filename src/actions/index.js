
export const PROJECT_SELECTED = 'project_selected';

export function selectProject(project) {
  
  return {
    type: PROJECT_SELECTED,
    payload: project
  };
  
}
