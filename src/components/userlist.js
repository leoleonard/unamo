import React, {Component} from "react";

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
          <Header/>
          <Toolbar
            data={this.state.data}
            warning={this.state.warning}
            updateData={this.updateData.bind(this)}
          ></Toolbar>
          <Table
          ></Table>
          {this.state.data.length?'':noUsersInfo}
        </div>
      )
    }
  }
  