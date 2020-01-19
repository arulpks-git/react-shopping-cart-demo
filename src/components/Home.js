

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart,fetch_cart_list_from_api } from './actions/cartActions';
import SliderComponent from './SliderComponent'
import FilterModal from './FilterModal'
import SortModal from './SortModal'
import HeaderSortComponent from './HeaderSortComponent'




 class Home extends Component{

    constructor(props) {
        super(props);
        this.state= { priceRange : [100,10000], sortField: '', sortField: ''}
    }
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
   
    componentDidMount() {
        this.props.fetch_cart_list_from_api();
        
    }
    
    priceFilter = (value) => {
        console.log("Price Filter",value);
        let minRange,maxRange;
        maxRange = value[1]*100;
        if(value[0] == 0)
        minRange =100;
        else if(value[0]!=0)
        {
            minRange = value[0]*100;
        }
       this.setState({priceRange: [minRange,maxRange]});
    }

    sortFilter = (value) => {
        console.log("Sort Filter",value);
        let sortField,sortOrder;
    
        if(value != "")
        {
            value = JSON.parse(value);
            sortField = value.field;
            sortOrder = value.sort;
        }
       this.setState({ ...this.state,sortField,sortOrder});
    }

     compareValues =(key, order = 'asc') => {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    render(){
        
       
        let productItem = Object.assign([],this.props.items);
       
        if(this.state.sortField != '' && productItem.length > 0)
        productItem.sort(this.compareValues(this.state.sortField,this.state.sortOrder));
        
        let itemList = (productItem.length > 0) && productItem.map(item=>{
           
            if( (item.price >= this.state.priceRange[0] && item.price <= this.state.priceRange[1] ) 
                &&  (item.name.includes(this.props.searchItemText) || item.category.includes(this.props.searchItemText))
                ) {
            return(
           
         
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img_url} alt={item.name}/>
                            <span className="card-title">{item.name}</span>
                            
                        </div>

                        <div className="card-content">
                            <p>{item.category}</p>
                            <p><b>${item.price} </b> <span style={{"color":"green"}}>{item.discount}% off</span></p>
                            <button class="btn-small orange accent-4 btncurve" type="submit" name="action" onClick={ () => {this.handleClick(item.id)}}>
                            <span style={{"color":"black"}}>Add to Cart </span>
                        </button>
                        </div>
                 </div>
                 

            )
            }
        })

        return(
           

          
            <div className="row">
                <div className={"col s12 m4 l2 hide-on-med-and-down"}>
                    <SliderComponent onApply={this.priceFilter} className={"hide-on-small-only"}/>
                </div>
                <div className="col s12 m8 l10">
                <HeaderSortComponent onSortApply={this.sortFilter} />
                <div className="row hide-on-large-only">
                    <div className="col s6 center-align">
                    <FilterModal onApply={this.priceFilter}/>
                    </div>
                    <div className="col s6 center-align">
                    <SortModal onSortApply={this.sortFilter}/>
                    
                    </div>
                </div>

                    <div className="row ">
                    <div class="col s12 cards-container">
                        {itemList}
                        </div>
                    </div>
                </div>
                
            </div>
           

            
           

           
        )
    }
   

  

    
}
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      searchItemText: state.searchItemText

    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        fetch_cart_list_from_api: ()=>{dispatch(fetch_cart_list_from_api())},

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)