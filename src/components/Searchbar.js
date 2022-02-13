import React, { useState } from "react";
import "./search.css";

export  default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query:'',
            hits:[]
        };
    }
    onChange = event=>{
        this.setState({query: event.target.value});
    };
    onSearch = event =>{
        event.preventDefault();
        const{query} = this.state;
        if(query === ""){
            return;
        }
        fetch("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos/query="+query)
        .then(response=>response.json())
        .then(result=>this.onSetResult(result,query));
    };
    onSetResult = (result,key)=>{
        this.setState({hits: result.hits});
    };
    render(){
        return(
        <>
        <form className="searchBar" action = "/" method="get">
            <label htmlFor="header--search"><span className="visually-hidden">Search blogs Here</span></label>
            <input placeholder="Search for blogs here!" type = "text" name = "s" id = "header--search" onChange={this.onChange}></input>
            <button type="submit" className = "btn-submit">
                Search
            </button>  
        </form>
        {this.state.hits.map(item =>(<div>{item}</div>))}
        </>
    )
    }
}