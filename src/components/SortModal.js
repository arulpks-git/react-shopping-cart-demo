import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class SortModal extends Component {
  constructor(props){
    super(props);
    this.state= {selectedOption : ''};
  }
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  
  render() {
    return (
      <div>
        <a
          className=" modal-trigger"
          data-target="modal2"
        >
          <i className="material-icons">local_bar</i><span>Filter</span>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
          <h4>Sort Options</h4>
          <form action="#">
            <p>
            <label>
                <input name="group1" type="radio" class="with-gap" value='{"field":"price","sort":"desc"}' onChange={this.handleOptionChange}/>
                <span>Price -- High Low</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio"  class="with-gap" value='{"field":"price","sort":"asc"}' onChange={this.handleOptionChange}/>
                <span>Price -- Low High</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio"  class="with-gap" value='{"field":"discount","sort":"desc"}' onChange={this.handleOptionChange}/>
                <span>Discount</span>
            </label>
            </p>
            </form>
          
          </div>

          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Cancel
            </a>
            <a className="modal-close waves-effect waves-green btn-flat" onClick={ () => this.props.onSortApply(this.state.selectedOption) }>
              Apply
            </a>
          </div>
          
        </div>
      </div>
    );
  }
}

export default SortModal;
