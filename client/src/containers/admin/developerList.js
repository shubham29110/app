import { connect } from 'react-redux';
import {addCorrespondingDeveloper} from '../../actions/project'
import DeveloperList from '../../components/project/DeveloperList'

const mapDispatchToProps={
  addCorrespondingDeveloper
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  admin:state.admin.developer,
  //developer:state.project.developer
})

export  default connect(mapStateToProps,mapDispatchToProps )(DeveloperList)