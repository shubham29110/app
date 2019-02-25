import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint ,AlternateEmail,PermIdentity,LaptopWindows} from '@material-ui/icons'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TechList from '../../containers/technologyList/techList'


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    },
    RadioGroup: {
        margin: `${theme.spacing.unit}px 0`,
      }
 
});

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            role:'',
            hide:true,
            technology:[],
            password: '',
            password_confirm: '',
            errors: {},
   
        }
    }

    handleInputChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value,
            
        })

        if (e.target.value === "Developer") {
            this.setState({
                hide:false,
                
            })
        } 
        if(e.target.value === "Admin") {
            this.setState({
                hide:true, 
            })
        }
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        if(this.props.technology){
            const user = {
                name: this.state.name,
                email: this.state.email,
                role:this.state.role,
                technology:this.props.technology,
                password: this.state.password,
                password_confirm: this.state.password_confirm,
    
            }
            console.log("user",user)
            this.props.registerUser(user, this.props.history);
        }
     
    }

   async componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
       
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    
      
    }

    render() {
        const { errors ,technology,name, email, password ,password_confirm,hide} = this.state;
        const {classes} = this.props
        return(

         <form onSubmit={this.handleSubmit}>
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField name="name" 
                            label="name" 
                            type="name"  
                            value={name} 
                            onChange={this.handleInputChange} 
                            className={classnames( {
                                        'is-invalid': errors.name
                                        })}
                            fullWidth autoFocus required />
                            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AlternateEmail />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField name="email" 
                            label="email" 
                            type="email"  
                            value={email} 
                            onChange={this.handleInputChange} 
                            className={classnames( {
                                        'is-invalid': errors.email
                                        })}
                            fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid style={{paddingBottom:"50px"}} item>
                            <PermIdentity   />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                        
                        <RadioGroup 
                            
                            onChange={this.handleInputChange}
                            name = "role"
                            className={classes.group} >
                        <FormControlLabel
                            style={{paddingLeft:"25px"}} 
                            value="Admin" 
                            control={<Radio color="primary" />}
                            label="Admin" />
                         <FormControlLabel 
                            style={{paddingLeft:"25px"}}
                            value="Developer" 
                            control={<Radio color="primary" />}
                            label="Developer" />
                         </RadioGroup>
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </Grid>
                    </Grid>

                           <Grid hidden={hide} container spacing={8} alignItems="flex-end">
                        <Grid style={{paddingBottom:'10px'}} item>
                            <LaptopWindows />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <div name="technology" 
                            className={classnames( {
                                        'is-invalid': errors.name
                                        })}
                            fullWidth autoFocus  >
                            <TechList />
                            </div>
                            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                        </Grid>
                    </Grid>
                    
                    <Grid hidden={hide} container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <LaptopWindows />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField name="technology" 
                            label="Technology" 
                            value={technology} 
                            onChange={this.handleInputChange} 
                            className={classnames( {
                                        'is-invalid': errors.name
                                        })}
                            fullWidth autoFocus  />
                            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField name="password" 
                            label="Password"
                            type="password"
                            value={password}
                            onChange={this.handleInputChange}
                            className={classnames({
                                        'is-invalid': errors.password
                                      })}
                            fullWidth required />
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField name="password_confirm" 
                            label="confirm password"
                            type="password"
                            value={password_confirm}
                            onChange={this.handleInputChange}
                            className={classnames({
                                        'is-invalid': errors.password_confirm
                                      })}
                            fullWidth required />
                            {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button type = 'submit' variant="outlined" color="primary" style={{ textTransform: "none" }}>Register</Button>
                    </Grid>
                </div>
            </Paper>
            </form>

        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};



export default withRouter(withStyles(styles)(Register))