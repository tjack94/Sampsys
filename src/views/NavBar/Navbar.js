import React, {Component} from 'react'

class NavBar extends Component{
    render(){
        if(this.props.location.pathname == '/' || this.props. location.pathname == '/register'){
            return null
        }else{
        return(
            <div>
                NavBar
            </div>
        )
    }}
}
export default NavBar