import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Message from 'components/Message'
import {showInfo} from 'Redux/ducks/buttonInfo-duck'

const Wrapper = styled.div`
	position: relative;
	padding: .5rem;
`

const ActionButton = styled.button`
	background: rgba(0,0,0,.2);
	border: none;
	border-radius: 1.5rem;
	width: 5rem;
	height: 5rem;
	box-shadow: 0px 5px 0px 0px rgba(0,0,0,.25), 0px 10px 5px rgba(0,0,0,.2);
	color: #fff;
	font-size: 1.5rem;
	padding: .5rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:focus {
		outline: 0;
	}
	&:active {
		box-shadow: 0px 2px 0px 0px rgba(0,0,0,.25), 0px 4px 5px rgba(0,0,0,.2);
		transform: translateY(4px);
		outline: 0;
	}
`

class Button extends Component {
	render() {
		const {children, id, message, onClick, showInfo} = this.props
		return (
			<Wrapper>
				<Message id={id} value={message}/>
				<ActionButton
					onClick={() => {
						if (onClick) {onClick()}
						showInfo(id)
					}}
				>
					{children}
				</ActionButton>
			</Wrapper>
		)
	}
}
Button.propTypes = {
	id: PropTypes.string,
	message: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
	showInfo: PropTypes.func,
}

function mapStateToProps(state) {
	return {buttonId: state.buttonInfo.buttonId}
}

export default connect(mapStateToProps, {showInfo})(Button)