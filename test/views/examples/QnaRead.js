import React ,{useState}from "react"
import axios from "axios";
import {Container, Button, Input } from "reactstrap";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import { useParams } from "react-router-dom";
import DarkFooter from "components/Footers/DarkFooter.js";
function QnaRead() {
    const {num} = useParams(); 
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss'); 
    const [Qna, setBoard] = useState({
    idx: "",
    title: "",
    content: "",
    qna_date: "",
    id: "",
    views: ""
}
     );
     const[Commentslist,setCommentsList] = useState([])
     const [Comments, setComments] = useState({
      title: "",
      content: "",
      comments_date: nowTime,
      qna_id: Qna.id,
      comments_id: "test",
      qna_no: Qna.idx,
      views: "0"
  }
       );
     //let pageHeader = React.createRef();


     React.useEffect(() => {
        axios.get('/api/qna/'+num)
        .then(function (response) {
            setBoard(response.data);
      
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/api/getCommentsById/'+num)
        .then(function (response) {
          //console.log(response.data)
          setCommentsList(response.data)
          console.log(Commentslist)
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
        
        window.location.href ='../qna-input/'+Qna.idx
      }
      const f4 = async () => {
        console.log(Qna);
        //삭제/board/{no}
        axios.delete('/api/qna/'+num)
        .then(function (response) {
          window.location.href ='../qna-page'
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }
      const f5 = async () => {
        console.log(Qna); //createcomment
        axios.post('/api/qna/comments',Comments)
        .then(function (response) {
          window.location.href ='../qna-read/'+Qna.idx
        })
        .catch(function (error) {
          console.log(error);
        });
   
      }
      function deletecomments(number){
        axios.delete('/api/qna/comments/'+number)
        .then(function (response) {
          window.location.href ='../qna-read/'+Qna.idx
        })
        .catch(function (error) {
          console.log(error);
        });
      }

      const commentsarray= Commentslist.map((data)=>{
if(Commentslist.length != '0'){
        return (
          <div class="list-reply" >
<h5 style={{color:"white"}}>{data.comments_id} &nbsp;  &nbsp;{data.content}  &nbsp;  &nbsp; {data.comments_date} <button class="del-reply" onClick={()=> deletecomments(data.idx)}>삭제</button>  </h5>      

          </div>

)
        
      }})
      


      //alert(Board.title);
    return(
        <div>
<div className="page-header"style={{ overflow: "initial" }}>
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg4.jpg").default + ")",
          }}
          //ref={pageHeader}
        ></div>
        <div className="content-center"style={{position:"initial", transform:"none"}}>
          <Container>
            <h1 className="board-title">게시판</h1><br/>
            <h2><Input
            placeholder={Qna.title}
            name="title"  disabled
            ></Input></h2>
            
            <h2><Input
       
            placeholder={Qna.content}
            type="textarea"
            name="content" disabled
            /></h2>
            <Button
            block
            className="btn-view"
            href="../../qna-page"
            size="5px"
            >
                목록
                </Button>
                <Button
            className="btn-delete"
            href="../../qna-page"
            onClick={f4}
            size="5px"
            >
                삭제
                </Button>
            <Button
            className="btn-update"
            // href=""
            onClick={f3}
            size="5px"
            >
                수정
                </Button>
                <br/><br/><br/>
          <textarea className="board-reply"
                                type="textarea"
                                placeholder="댓글 입력해봐요.." name="answer"
                              
                                onChange={({ target: { value } }) => setComments({
                                    content: value,
                                    comments_date: Comments.comments_date,
                                    qna_id: Qna.id,
                                    comments_id: "test",
                                    qna_no: Qna.idx,
                                    views: "0"
                           })}
                            /><br/>
                            <button className="btn-reply" size="5px" onClick={f5} >댓글</button>
          </Container>
          <br/>
          <br/>
          {commentsarray}
        </div>

      </div>
      <DarkFooter />
      </div>
    )
}

export default QnaRead;