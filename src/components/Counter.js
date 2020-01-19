import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
class Counter extends Component{
    
   

    render(){
  
        return(
            <span class="badge">{this.props.addedItems.length}</span>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        
    }
}


export default connect(mapStateToProps,null)(Counter)
