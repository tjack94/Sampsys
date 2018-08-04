import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as Actions from '../../Redux/actions'

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const location = this.props.location.pathname
        if(location == '/' || location == '/register' || location == '/survey/:surveyid'){

        }else{
            axios.get('/api/auth/me')
                .then(response=>{
                     this.props.getUser(response.data[0]) 
                })
                .catch((error)=> this.props.history.push('/'))
        }
    }
    logOut(){
        axios.post('/api/auth/logout').then(() => {
            this.props.logUserOut()
            
        })
    }
    render(){
        if(this.props.location.pathname == '/' || this.props. location.pathname == '/register'){
            return null
        }else{
        return(
            <div>
               <div>
                   <Link to='/dashboard'><button>Home</button></Link>
               </div>
               <div>
                   <Link to= '/create-survey/step1'> <button>Create New Survey</button> </Link>
               </div>
                <Link to= '/'><button onClick={()=> this.logOut()}>logout</button></Link>
            </div>
        )
    }}
}
export default connect(state => state, Actions)(NavBar)