import { addTechnology } from '../../actions/project';
import { connect } from 'react-redux';
import TechList from '../../components/technologyList/techList'


const mapDispatchToProps={
    addTechnology
}

// const mapStateToProps = (state) => ({
//   auth: state.auth
// })

export default connect(null,mapDispatchToProps)(TechList)