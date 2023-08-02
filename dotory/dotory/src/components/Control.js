import React, { Component } from 'react';

class Control extends Component {
    render(){
      console.log('Subject render');
      return (
        <ul className='LI'>
          <li className="CREATELI"><a href="/create" className="CREATE"onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          
          <li className="DELETELI"><input className="DELETE" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }

export default Control; 