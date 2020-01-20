import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
class Counter extends Component{
    
   

    render(){
  
        return(
            <span class="badge">{this.props.totalCount}</span>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        totalCount: state.totalCount,
        
    }
}


export default connect(mapStateToProps,null)(Counter)
