import {Component} from 'react';

class Hornedbeast extends Component {

    constructor(props){
        super(props);
        this.state = {
            favorited: 0
        }
    }

    handleClick = () => {
        this.setState({favorited: this.state.favorited + 1})
    }

    render () {
        return (
            <>
           <h2> {this.props.title}</h2>
           <img src = {this.props.src} alt={this.props.title} onClick={this.handleClick} />
           <p> {this.props.description} </p>
           <p>&hearts; {this.state.favorited}</p>
            </>
        )

    }
}

export default Hornedbeast;