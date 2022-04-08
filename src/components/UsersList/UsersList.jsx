import React from "react";
import { getUsers } from "../../functions/users";


export default class UsersList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            users:[]
        }

    }

   componentDidMount () {
       getUsers().then(users => this.setState({users}));

   }

   render() {
       const rows = this.state.users.map(user => <UsersListRow user={user} />);

       return(
           <table>
               <thead>
                   <tr>
                       <th>#</th>
                       <th>name</th>
                       <th>email</th>

                   </tr>

               </thead>
               <tbody>
                   { rows }
               </tbody>
           </table>
       );

   }
}