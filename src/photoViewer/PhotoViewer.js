import React from "react";
import Style from "./PhotoViewer.css";




class PhotoViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { url: `https://picsum.photos/id/1001/1600/900.jpg` };
    }

    SelectId() {
        const idNumbers = [1001, 1002, 1003, 1004, 1005, 1006];
        console.log(Math.floor(Math.random() * 6));
        this.setState({ url: `https://picsum.photos/id/${idNumbers[Math.floor(Math.random() * 6)]}/1600/900.jpg` });
    }

    render() {
        return (
            <div> 
            <img class="image" src={this.state.url} alt="placeholder text" onClick={() => this.SelectId()} ></img>
            <h1>{this.state.url}</h1>
            </div>
        );
    }

    // TODO NOTES: Wasnt sure how to do a method with the on click handler

    // onClick={() => this.setState({ count: this.state.count + 1 } //TODO needs to be written in this syntax. Why? fails if i do the one below. 
    // onClick={this.SelectId()} 
}

// function PhotoViewer(props){


//     'PhotoViewer' //ask oskar why we need this line?
//     console.log(props);
//     return(<img class = "image" src={props.url} alt="placeholder text"></img>);

// }

export { PhotoViewer }; // I didnt know you could import functions into other files