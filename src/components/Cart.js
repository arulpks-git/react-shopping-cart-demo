import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity

    handleSubtractQuantity = (id)=>{
       
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img_url} alt={item.img_url} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.name}</span>
                                        <p>{item.category}</p>
                                        <p><b>${item.price}</b> <span className="green-text">{item.discount}% off</span></p> 
                                        <p>
                                            
                                        </p>
                                                                                                                 
                                    </div>
                                    <div className="item-desc">
                                    <div className="add-remove valign-wrapper center-align">
                                            <i className="material-icons grey-text tiny"  onClick={()=>{this.handleSubtractQuantity(item.id)}}>remove_circle_outline</i>
                                            &nbsp;&nbsp;<div className="square valign-wrapper center-align ">{item.quantity}</div>&nbsp;&nbsp;
                                            <i className="material-icons grey-text tiny" onClick={()=>{this.handleAddQuantity(item.id)}}>add_circle_outline</i>
                                    </div>
                                    </div>

                                        <div className="item-desc">
                                        <span className="dark-black-text bold-text remove" onClick={()=>{this.handleRemove(item.id)}}><b>REMOVE</b></span>
                                        </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="row">
                <div className="cart col s12 m9 l9">
                  
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)