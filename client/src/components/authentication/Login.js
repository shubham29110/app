import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import classnames from 'classnames';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {classes}=this.props
        const {errors} = this.state;
        return(
                <form onSubmit={this.handleSubmit}>
                    <Paper className={classes.padding}>
                        <div className={classes.margin}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <Face />
                                </Grid>
                                <Grid item md={true} sm={true} xs={true}>
                                    <TextField 
                                        name="email" 
                                        label="username" 
                                        type="email"  
                                        value={this.state.email} 
                                        onChange={this.handleInputChange} 
                                        className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.email
                                                })}
                                        fullWidth autoFocus required />
                                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
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
                                        value={this.state.password} 
                                        onChange={this.handleInputChange}
                                        className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.password
                                                        })} 
                                        fullWidth required />
                                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </Grid>
                            </Grid>
                            <Grid container justify="center" style={{ marginTop: '10px' }}>
                                <Button type = 'submit' 
                                    variant="outlined" 
                                    color="primary" 
                                    style={{ textTransform: "none" }}>
                                    Login
                                </Button>
                            </Grid>
                        </div>
                    </Paper>
                 </form>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


export  default withStyles(styles)(Login)