import react from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as LocalStorageHelper from "../helpers/local-storage-helper";
import Stars from "react-star-rating-component";

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTypeScriptLover: "",
      a: null,
		isSaved: false,
		isTypeScriptLevel: 0
    };
  }

  onChange_isTypeScriptLover() {
    console.log("onChange_isTypeScriptLover");
    this.setState({
      isTypeScriptLover: !this.state.isTypeScriptLover
    });
  }

  componentDidMount() {
	 let user = LocalStorageHelper.read("user");

    if (!user) {
      return
	 }

    this.setState({
		isTypeScriptLover: user.isTypeScriptLover,
      isTypeScriptLevel: user.isTypeScriptLevel
		
    });
  }

  onSubmit(e) {
    e.preventDefault();
    LocalStorageHelper.create("user", this.state);
    this.setState({
      isSaved: true
    });
  }

  starFunction(value){
	  
	this.setState({
		isTypeScriptLevel: value
	})
  }

  render() {
    const URL = this.props.match.params.id;
    // const URL = window.location.href;

    return (
      <div>
        <h2>Profile of {URL}</h2>
        <Link to="/">Back</Link>

        {this.state.isSaved && (
          <div className="alert alert-success">
            <h3>Danke</h3>
            Saved
          </div>
        )}

        <div className="jumbotron">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  name="isTypeScriptLover"
                  checked={this.state.isTypeScriptLover}
                  onChange={() => this.onChange_isTypeScriptLover()}
                />
                Czy preferujesz pisanie kodu w TypeScript?
              </label>
            </div>

            <div className="form-group display-4">
				  <Stars 
				  name="isTypeScriptLevel" 
				  value={this.state.isTypeScriptLevel}
				  onStarClick={value => this.starFunction(value)}/>
            </div>

            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Zapisz" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
