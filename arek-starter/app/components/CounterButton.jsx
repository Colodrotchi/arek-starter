import React, {Component} from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'

const Counter = styled.button`
	font-size: 25px;
	color: #0000FF;
	background: transparent;
	border: none;
	width: 5rem,
	height: 5rem,
`
const CounterBiggerThanFive = styled.button`
	font-size: 35px;
	color: #DC143C;
	background: transparent;
	border: none;
	width: 5rem,
	height: 5rem,
`

class CounterButton extends Component {
	constructor(props) {
		super(props)
        this.state = {
            count: 0
        }
    }
	onClick(e) {
        this.setState({
            count: this.state.count + 1

        });
    }

	render() {
		const test = this.state.count;
		const style = {
			background: 'palevioletred',
			width: '5rem',
			height: '5rem',
			transition: '0.3s'
		}
		if (test > 5) {
        	return (
        		<button style={style} onClick={this.onClick.bind(this)}>
				
			
				<CounterBiggerThanFive>{this.state.count} </CounterBiggerThanFive>
				
			</button>)
    	}
		return (
			<button style={style} onClick={this.onClick.bind(this)}>
				
			
				<Counter>{this.state.count}</Counter>
				
			</button>
		)
	}
}

export default CounterButton