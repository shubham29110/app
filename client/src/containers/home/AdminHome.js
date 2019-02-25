import { logoutUser } from '../../actions/authentication';
import { connect } from 'react-redux';
import AdminHome from '../../components/home/AdminHome'


const mapDispatchToProps={
  logoutUser
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminHome)