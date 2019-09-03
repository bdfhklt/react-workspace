import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Home extends Component{
	render(){
		return(
			<div>
				<h4>홈</h4>

				<a href="board">게시판</a>
				<a href="member">회원</a>
			</div>
		);
	}
}

export default Home;