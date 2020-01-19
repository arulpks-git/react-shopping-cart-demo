import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSearchItemText } from './actions/cartActions';


    class SearchComponent extends Component{

        constructor(props){
            super(props);
            this.state = { searchItem : ''}
        }

        onSearch = (event) => {
            event.preventDefault();
            console.log("searchText",this.state.searchItem);
            this.props.addSearchItemText(this.state.searchItem);
        }

        handleChange = (event) => {
            this.setState( {[event.target.name] : event.target.value } );
        }

        render() {

            return(
                <form action="#" onSubmit={(event) => this.onSearch(event)}>
                <div class="input-field col s6">
                    
                    <i class="material-icons postfix">search</i>
                    <input id="icon_prefix" type="text" class="validate" name="searchItem" onChange={ (e) => this.handleChange(e)}/>
                    <label for="icon_prefix">Search</label>
                  
                </div>
                  </form>
            )

        }



    }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addSearchItemText: (searchText)=>{dispatch(addSearchItemText(searchText))},
       
    }
}
export default connect(null,mapDispatchToProps)(SearchComponent);
