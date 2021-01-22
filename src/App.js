import Customer from './components/Customer.js'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core";
 
const useStyles = makeStyles({
  helloThereStyle:{
   // fontStyle: "oblique",
    color: "red",
    fontSize: "30px"
  },
  buttonStyles: {
    color: "green"
  }
})

const customers = [ {
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍길숙',
  'birthday': '951222',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name': '홍숙',
  'birthday': '951222',
  'gender': 'boy',
  'job': '선생님'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name': '기길숙',
  'birthday': '941222',
  'gender': 'girl',
  'job': 'programmer'
}
]

function App() {
  const classes = useStyles();

  return (
  <div>
    {
      <>
      <center>
      <Typography className={classes.helloThereStyle} variant="h1" color="primary">고객 관리 시스템</Typography>
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
        {customers.map(c=>{ return( <Customer id = {c.id} image ={c.image} name = {c.name} birthday={c.birthday} gender = {c.gender} job = {c.job} />)})}
      </TableBody>
      
      </Table>
      </center>
      </>
        }
   </div>
  ); 
}

export default App;
