import React from "react";
function Person() {

    //mbti 에 맞게 if 또는 case 해서 사진을 띄워야된다 토큰
    let mbti_B ="img/logo.png"
    let mbti_C ="img/default-avatar.png"

return(
    <div class="result-box">
                <div class="person-type">유형별 잘맞는 사람</div>
        <div class="result-box-title">

            <div class="img-halt-box">
                <ui class="list">
                    <li class="person1">
                        <span class="label-top">Like</span>
                        <img
                        //alt="bg5"
                        src={mbti_B}/>
                        <span class="label-bottom">설명이던가</span>
                        <a href="#" class="btn-gray-round">보러가기</a>
                    </li>
                    <li class="person2">
                        <span class="label-top">Hate</span>
                        <img
                        //alt="bg5"
                        src={mbti_C}/>
                        <span class="label-bottom">설명이던가</span>
                        <a href="#" class="btn-gray-round">보러가기</a>
                    </li>
                </ui>
            </div>
        </div>
    </div>
)
}
export default Person;