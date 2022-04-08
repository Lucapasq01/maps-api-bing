import React from "react";

export default class UsersListRow extends React.Component{
    constructor(props){
        super(props);
    }
    
   render(){
       return(
          <tr>
              <td>{this.props.user.id}</td>
              <td>{this.props.user.name}</td>
              <td>{this.props.user.email}</td>
         </tr>
       );
   }
}
