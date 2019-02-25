import { connect } from 'react-redux';
import { registerUser } from '../../actions/authentication';
import Register from '../../components/authentication/Register'

const mapDispatchToProps={
  registerUser
}
const mapStateToProps = state => ({
  auth: state.auth,
  technology:state.project.technology,
  errors: state.errors
});

export default connect(mapStateToProps,mapDispatchToProps)(Register)