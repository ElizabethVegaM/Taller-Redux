import React, {Component} from 'react';
import {connect} from 'react-redux';
import Light from './Light';
import { turnLightsToYellow, turnLightsToGreen } from './actions/lights';
import { startRedTimer } from './actions/timer';

class Frame extends Component{
  render(){
    return (<div>
      <Light color="red"></Light>
      <Light color="yellow"></Light>
      <Light color="green"></Light>

      <button onClick={()=>{this.props.turnToRed(60)}}>Semáforo en Rojo</button>
      <button onClick={this.props.turnToYellow}>Semáforo en Amarillo</button>
      <button onClick={this.props.turnToGreen}>Semáforo en Verde</button>
    </div>);
  }
}

const mapStateToProps = (state)=>{
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    turnToRed: startRedTimer(dispatch),
    turnToYellow: turnLightsToYellow(dispatch),
    turnToGreen: turnLightsToGreen(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame);