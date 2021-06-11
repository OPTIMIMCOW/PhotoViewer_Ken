class PhotoViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { url: `https://picsum.photos/id/1001/1600/900.jpg` };
    }

    SelectId() {
        const idNumbers = [1001, 1002, 1003, 1004, 1005, 1006];
        console.log(Math.floor(Math.random() * 6));
        this.setState ({ url: `https://picsum.photos/id/${idNumbers[Math.floor(Math.random() * 6)]}/1600/900.jpg`});
    }

    render() {
        return (
            <img class="image" src={this.state.url} alt="placeholder text" onClick={this.SelectId()}></img>
        );
    }

    // onClick={this.SelectId()} 
}