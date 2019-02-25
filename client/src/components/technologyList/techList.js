import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      borderTop: '1px solid white',
    },
  
  
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 300,
      maxWidth: 500,
      
  
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
   
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
    noLabel: {
      marginTop: theme.spacing.unit * 3,
    },
  });
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  
  function getStyles(name, that) {
    return {
      fontWeight:
        that.state.name.indexOf(name) === -1
          ? that.props.theme.typography.fontWeightRegular
          : that.props.theme.typography.fontWeightMedium,
    };
  }
  

const technology = [
    'Javascript',
    'React.js',
    'Node.js',
    'Angular.js',
    'Ruby on Rails',
    'Python',
    'Android',

  ];

  class TechList extends React.Component {
    state = {
        technology: [],
    };
  
    handleChange = event => {
      this.setState({ technology: event.target.value });
      
     
    };

  componentDidUpdate(){
    if(this.state.technology.length>0){
      this.props.addTechnology(this.state.technology)
      console.log('tech',this.state.technology)
    }
  }
    render() {
      const { classes } = this.props;
      return (
        <div>
        
        <div className={classes.root} >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Technologies</InputLabel>
            <Select
              multiple
              value={this.state.technology}
              onChange={this.handleChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {technology.map((tech )=> (
                <MenuItem key={tech} value={tech}>
                  <Checkbox checked={this.state.technology.indexOf(tech) > -1} />
                  <ListItemText primary={tech} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
       
        </div>
      );
    }
  }
  
  TechList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(TechList);