import React, { Component } from 'react';
import classnames from 'classnames';
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import DeveloperList from '../../containers/admin/developerList'
import TechList from '../../containers/technologyList/techList'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: '100%',
  },
});

 class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        technology: '',
        date:'',
        developer:[],
        discription: '',
        errors: {}
    }
}

handleInputChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })

}

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
 if(this.props.technology){
   const technology={
     technology:this.props.technology
   }
  this.props.getDeveloper(technology)
 }
}


handleSubmit =(e) => {
  e.preventDefault();
  debugger
  const project = {
    title: this.state.title,
    date: new Date().toLocaleString(),
    technology: this.props.technology,
    developer:this.props.developer,
    discription: this.state.discription,
    id:this.props.auth.user.id

  }
  console.log(project)
    
  this.props.addProject(project, this.props.history);
}
    render() {
            const { errors,title,technology,discription } = this.state;
            const {classes} = this.props
        return (
          <Paper className={classes.padding}
                  style={{ justify:"center"}}>
            <form onSubmit={this.handleSubmit}  
                  className={classes.container} 
                  noValidate autoComplete="off">  
                            <TextField 
                            name="title"
                            label="Title"
                            style={{ margin: 8 }}
                            placeholder="Title"
                            value={title}
                            helperText="Please provide a title!"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            className={classnames( {'is-invalid': errors.title })}
                            InputLabelProps={{shrink: true, }} 
                            onChange={this.handleInputChange}
                            />
                            {errors.title && (<div className="invalid-feedback">{errors.title}</div>)}
                            <TechList />
                            <TextField
                              name="technology"
                              label="Technology"
                              style={{ margin: 8 }}
                              placeholder="Technology"
                              value={technology}
                              helperText="Please provide Project Technology"
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              className={classnames( {'is-invalid': errors.technology })}
                              InputLabelProps={{ shrink: true, }}
                              onChange={this.handleInputChange}
                            />
                            {errors.technology && (<div className="invalid-feedback">{errors.technology}</div>)}

                            <TextField
                              name="discription"
                              label="Discription"
                              style={{ margin: 8 }}
                              placeholder="Discription"
                              value={discription}
                              helperText="Please provide brief discription about project!"
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              className={classnames( {'is-invalid': errors.discription })}
                              multiline={true}
                              rows={4}
                              rowsMax={8}
                              InputLabelProps={{shrink: true,}}
                              onChange={this.handleChange}
                            />
                            {errors.discription && (<div className="invalid-feedback">{errors.discription}</div>)}
                            <DeveloperList />
                           
                    <Grid container justify="center" style={{ marginBottom: '10px' }}>
                        <Button 
                              type = 'submit' 
                              variant="outlined" 
                              color="primary" 
                              style={{ textTransform: "none" }}>
                              AddProject
                        </Button>
                    </Grid>
                    
            </form>
            </Paper>
            
        );
    }
}

export default withStyles(styles)(AddProject)