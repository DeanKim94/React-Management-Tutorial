import React, { Component } from 'react';
import Customer from './components/Customer.js';
import CustomerAdd from './components/CustomerAdd.js';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';



const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin : '10px'
  },
  helloThereStyle:{
   // fontStyle: "oblique",
    color: "red",
    fontSize: "30px"
  },
  buttonStyles: {
    color: "green"
  }
};


class App extends Component {
    state = { 
        customers: "",
        completed: 0
      };
    componentDidMount(){
        this.timer = setInterval(this.progress, 20); //0.02초 마다 
        this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
      }

    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
      }

    progress = ()=> {
      const { completed } = this.state; //state 변수 가져오기
      this.setState({completed: completed >= 100 ? 0: completed + 1});
    }
    //  const classes = useStyles();

  render(){
    const { classes } = this.props;
  return (
    <div>
    {
      <div>
      <center>
      <Typography className={classes.helloThereStyle} variant="h2" color="primary">고객 관리 시스템</Typography>
      <Button className={classes.buttonStyles} color="secondary" variant="outlined"> This is our first button </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {this.state.customers? this.state.customers.map(c=>{ return( <Customer key={c.id} id = {c.id} image ={c.image} name = {c.c_name} birthday={c.birthday} gender = {c.gender} job = {c.job} />)
        }):
        <TableRow>
          <TableCell colSpan="6" align="center">
            <CircularProgress variant="determinate" value={this.state.completed} />
          </TableCell>
        </TableRow> 
        }
      </TableBody>
      
      </Table>
      </center>
      <CustomerAdd />
      </div>
    }
    </div>

  ); 
  }
}

export default withStyles(styles)(App);
