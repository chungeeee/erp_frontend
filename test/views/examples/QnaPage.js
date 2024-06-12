import React ,{useState} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container, Row} from "reactstrap";
// reactstrap components
//import { useParams } from "react-router-dom";
// core components
import ResultNavbar from "components/Navbars/ResultNavbar.js";
import BoardPageHeader from "components/Headers/BoardPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function QnaPage() {
   //axios.get('http://localhost:8080/api/test')
   //then((Response)=>{console.log(Response.data)})
   //.catch((Error)=>{console.log(Error)})
   const useStyles = makeStyles({
     table: {
      minWidth: 100, backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      borderRadius: "10px",
      "& .MuiTableCell-head": {
        color: "white"},
      "& .MuiTableCell-body": {
          color: "white"
      }
     },
   });
var now = new Date();

  const classes = useStyles();  
  const [p_num,setNum]=useState(1);
  const [keyword,setKeyword]=useState();
  const [pagingData,setData]=useState([]);
  const [list,setList]=useState([]);


  React.useEffect(() => {
    axios.get('/api/getPagingQna?p_num='+p_num+'&?keyword='+keyword)
    .then(Response => {
      console.log(Response)

        if (Response.status === 200) {
          setData(Response.data.pagingData);
          setList(Response.data.list);
       }
    });
    document.body.classList.add("qa-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("qa-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

function listQna(num, keyword)
{

    axios.get('/api/getPagingQna?p_num='+num+'&keyword='+keyword)
    .then(Response => {
      console.log(Response.data.pagingData)
        if (Response.status === 200) {
          setData(Response.data.pagingData);
          setList(Response.data.list);
          
       }
    })
  };
 
function viewPaging() {
  const pageNums = [];
  for (let i = pagingData.pageNumStart; i <= pagingData.pageNumEnd; i++) {
      pageNums.push(i);
  }
  let currentpage = pagingData.currentPageNum;
  return (pageNums.map((page) =>
      <li className="page-item" key={page.toString()}>
          <a className="page-link" onClick={() => listQna(page , keyword)}>
              {
                  (function () {
                      if (page == currentpage)
                          return (<div style={{ color: '#ff5d28', fontWeight: 'bold' }}>{page}</div>);
                      else return (<div>{page}</div>);
                  })()
              }
          </a>
      </li>
  ));
};

function isPagingPrev() {
  if (pagingData.prev) {
      return (
          <li className="page-item">
              <a className="page-link" onClick={() => listQna(pagingData.currentPageNum - 1,keyword)} tabIndex="-1">Previous</a>
          </li>
      );
  }
};

function isPagingNext() {
  if (pagingData.next) {
      return (
         <li className="page-item">
              <a className="page-link" onClick={() => listQna(pagingData.currentPageNum + 1, keyword)} tabIndex="-1">Next</a>
          </li>
      );
  }
};


  return (
    <>
       <ResultNavbar />
      <div className="wrapper">
        <BoardPageHeader />         
        <div className="section">
          {/* <div class="board-title">자유게시판</div> */}
          <Container>
             <Row className="board-page">
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="center">title</TableCell>
            <TableCell align="center">date</TableCell>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">views</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          { list.map((row) => (
            <TableRow key={row.idx}>
              <TableCell align="center" component="th" scope="row">
              <a onClick={() => window.location.href ='./qna-read/'+row.idx}>{row.title}</a>
              </TableCell>
              <TableCell align="center">{row.qna_date}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.views}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
            </Row> 
            <input type="text"
          placeholder="검색하기.."
          name="search"
          type="text"
          className="text-search"
          onChange={e => setKeyword(e.target.value)} />
          
          <Button className="btn-search"
                color="info"
                onClick={() => listQna(1, keyword)}
                //target="_blank"
                >조회</Button>

              <Button
                className="btn-searchboard"
                color="info"
                href="./qna-input/new"
                //target="_blank"
              >등록
              </Button>
          </Container>
          
        </div>
      { <div >                   
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center"style={{backgroundColor:"black", marginBottom: "auto"}}>
                               
                                    {
                                        isPagingPrev()
                                    }
                                    {
                                        viewPaging()
                                    }
                                    {
                                        isPagingNext()
                                    }
                                </ul>
                            </nav>
                        </div>
}
        <DefaultFooter />
      </div>
      
    </>
  );
}

export default QnaPage;