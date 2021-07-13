import React, {Component, Fragment} from "react"
class AppHeader extends Component{
    constructor(props){
        super(props)    
        this.state = {
              dete: [],   
        }
  }

heloo = () =>{
    this.props.heloo3("header")
}

    render(){
        return ( 
           <Fragment>
                <div>header</div>
                <button onClick={this.heloo} >show Hello</button>
           </Fragment>
        )
    }
}
export default AppHeader
