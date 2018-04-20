import React, {Component} from "react";
import Table from './table/table.js';
import Toolbar from './toolbar/toolbar.js';
import Header from './header/header.js';
import _ from 'lodash';

export default class Userlist extends Component {
    constructor(props){
      super(props);
      this.state={
        data:'',
        sortby:'',
        descending:false,
        warning:''
      }
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
        .then(data => {
            if(data.length!==0){
              this.setState({
                data:data
              })
            } else if (data.length===0){
              console.log("Failed to download data from server");
            }
          }
        );
    }
  

  
    render(){
      const noUsersInfo = <span>No users</span>;
      return (
        <div className="userlist">

          {this.state.data.length?'':noUsersInfo}
        </div>
      )
    }
  }
  