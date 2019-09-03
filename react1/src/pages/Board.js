import React, {Component} from 'react';
import PropTypes from 'prop-types';

// npm install axios --save
import axios from 'axios';

class Board extends Component{

    state = {
        no : '',
        title : ''
    }

    //생명주기 발생시 STS의 RESTful에 접근해서 정보를 가져옴.
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/web/boardc.json?no=2').then(res => {
            console.log(res.data);
            this.setState( {no: res.data.BRD_NO, title : res.data.BRD_TITLE} );
        })
        .catch(function(error){
            console.log('에러 발생' + error);
        })
    }
    render(){
        return(
            <div>
                <h3>게시판</h3>
                <p>글번호:{this.state.no}</p>
                <p>제목:{this.state.title}</p>
            </div>
        );
    }
}

export default Board;