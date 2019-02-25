import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import Login from '../../components/authentication/Login'

const mapDispatchToProps={
  loginUser
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export  default connect(mapStateToProps,mapDispatchToProps )(Login)