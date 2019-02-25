import { connect } from 'react-redux';
import { addProject,getDeveloper } from '../../actions/admin';
import AddProject from '../../components/project/AddProject'

const mapDispatchToProps={
  addProject,
  getDeveloper
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  auth:state.auth,
  admin:state.admin.developer,
  technology:state.project.technology,
  developer:state.project.developer
})

export  default connect(mapStateToProps,mapDispatchToProps )(AddProject)