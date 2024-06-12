import React ,{useState}from "react"
import axios from "axios";
import {Container, Button, Input } from "reactstrap";
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';
import { useParams } from "react-router-dom";
function QnaInput() {
   
const nowTime = moment().format('YYYY-MM-DD HH:mm:ss'); 

const {mode} = useParams(); 

    const [Qna, setQna] = useState({
      idx:null,
         title: "",
         content: "",
         qna_date: nowTime,
         id: "test",        
         view: "0"
}
      );
   
     let pageHeader = React.createRef();

     React.useEffect(() => {
       if(mode != 'new'){
      axios.get('/api/qna/'+mode)
      .then(function (response) {
        console.log(response)
          setQna(response.data);
    
      })
      .catch(function (error) {
        console.log(error);
      });}

    }, []);
  
     const f3 = async () => {
       if(mode==='new'){ //new
        axios.post('/api/qna', Qna)
      .then(function (response) {
        console.log(response);
        window.location.href ='../../qna-read/'+response.data.idx
      })
      .catch(function (error) {
        console.log(error);
      });
    }else { //update
      axios.put('/api/qna/'+Qna.idx, Qna)
      .then(function (response) {
        console.log(response);
        window.location.href ='../../qna-read/'+Qna.idx
      })
      .catch(function (error) {
        console.log(error);
      });
    }

      }


    return(
<div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/bg4.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">질문게시판</h1><br/>
            <h2><Input
            placeholder="제목..."
            type="text"
            name="title"
            class="form-control2"
            value={Qna.title}
            onChange={({ target: { value } }) => 
             setQna({
               idx:Qna.idx,
                 title: value,
                 content: Qna.content,
                 qna_date: Qna.qna_date,
                id: Qna.id,        
                view: Qna.view
        })
 
    }

            ></Input></h2>
            
            <h2><Input
            placeholder="내용..."
            type="textarea"
            name="content"
            value={Qna.content}
            onChange={({ target: { value } }) => setQna({
              idx:Qna.idx,
                title: Qna.title,
                content: value,
                qna_date: Qna.qna_date,
                id: Qna.id,        
                view: Qna.view
       })}
            ></Input></h2>
            <br/>
            <Button
            className="btn-viewboard"
            color="black"
            href="../qna-page"
            size="5px"
            >
                목록
                </Button>
            <Button
            className="btn-inputboard"
            color="black"
            // href=""
            onClick={f3}
            size="5px"
            >
                등록
                </Button>
                
          </Container>
        </div>
        
      </div>

    )
}

export default QnaInput;