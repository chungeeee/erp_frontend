import React ,{useState}from "react"
import axios from "axios";
import {Container, Button, Input } from "reactstrap";
import moment from 'moment';
import DarkFooter from "components/Footers/DarkFooter.js";
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import { useParams } from "react-router-dom";
import { transform } from "typescript";
function BoardRead() {
    const {num} = useParams(); 
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss'); 
    const [Board, setBoard] = useState({
    idx: "",
    title: "",
    content: "",
    board_date: "",
    id: "",
    views: ""
}
     );
     const[Commentlist,setCommentList] = useState([])
     const [Comment, setComment] = useState({
      title: "",
      content: "",
      comment_date: nowTime,
      board_id: Board.id,
      comment_id: "test",
      board_no: Board.idx,
      views: "0"
  }
       );
     //let pageHeader = React.createRef();


     React.useEffect(() => {
        axios.get('/api/board/'+num)
        .then(function (response) {
            setBoard(response.data);
      
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/api/getCommentById/'+num)
        .then(function (response) {
          //console.log(response.data)
          setCommentList(response.data)
          console.log(Commentlist)
        })
        .catch(function (error) {
          console.log(error);
        });
   
        // document.body.classList.add("boardread/:num");
        // document.body.classList.add("sidebar-collapse");
        // document.documentElement.classList.remove("nav-open");
        // window.scrollTo(0, 0);
        // document.body.scrollTop = 0;
        // return function cleanup() {
        //   document.body.classList.remove("boardread/:num");
        //   document.body.classList.remove("sidebar-collapse");
        // };
      }, []);

     const f3 = async () => {
        
        window.location.href ='../boardinput/'+Board.idx
      }
      const f4 = async () => {
        console.log(Board);
        //삭제/board/{no}
        axios.delete('/api/board/'+num)
        .then(function (response) {
          window.location.href ='../board-page'
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }
      const f5 = async () => {
        console.log(Board); //createcomment
        axios.post('/api/board/comment',Comment)
        .then(function (response) {
          window.location.href ='../boardread/'+Board.idx
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }
      function deletecomment(number){
        axios.delete('/api/board/comment/'+number)
        .then(function (response) {
          window.location.href ='../boardread/'+Board.idx
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      const commentarray= Commentlist.map((data)=>{
if(Commentlist.length != '0'){
        return (
          <div class="list-reply" >
<h5 style={{color:"white"}}>{data.comment_id} &nbsp;  &nbsp;{data.content}  &nbsp;  &nbsp; {data.comment_date} <button class="del-reply" onClick={()=> deletecomment(data.idx)}>삭제</button>  </h5>      

          </div>

)
        
      }})
      


      //alert(Board.title);
    return(<><div>

      <div className="page-header" style={{ overflow: "initial" }}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg4.jpg").default + ")",
          }}
        ></div>
        <div className="content-center" style={{ position: "", transform: "" }}>
          <Container>
            <h1 className="board-title">게시판</h1><br />
            <h2><Input
              placeholder={Board.title}
              name="title" disabled
            ></Input></h2>

            <h2><Input

              placeholder={Board.content}
              type="textarea"
              name="content" disabled /></h2>
            <Button
              block
              className="btn-view"
              href="../../board-page"
              size="5px"
            >
              목록
            </Button>
            <Button
              className="btn-delete"
              // href=""
              onClick={f4}
              size="5px"
            >
              삭제
            </Button>
            <Button
              className="btn-update"
              href="../../board-page"
              onClick={f3}
              size="5px"
            >
              수정
            </Button>
            <br /><br /><br />
            <textarea className="board-reply"
              type="textarea"
              placeholder="댓글 입력해봐요.." name="answer"

              onChange={({ target: { value } }) => setComment({
                content: value,
                comment_date: Comment.comment_date,
                board_id: Board.id,
                comment_id: "test",
                board_no: Board.idx,
                views: "0"
              })} /><br />
            <button className="btn-reply" size="5px" onClick={f5}>댓글</button>
          </Container>
          <br />
          <br />
          {commentarray}
        </div>

      </div>

    </div><DarkFooter /></>
    )
}

export default BoardRead;