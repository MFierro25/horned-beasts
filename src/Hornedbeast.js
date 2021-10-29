import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Hornedbeast extends Component {

    constructor(props){
        super(props);
        this.state = {
            favorited: 0
            
        }
    }

    handleFavorite = () => {
        this.setState({favorited: this.state.favorited + 1})
    }

  handleClickModal = () => {
      this.props.changeBeast(this.props.beast);
  }

    render () {
        return (
        <div>
           <Card style={{width: '16rem'}}>
               <Card.Body>
               <Card.Title>{this.props.beast.title}</Card.Title>
               <Card.Img variant='top'
            src = {this.props.beast.image_url}
            title = {this.props.beast.title}
            description = {this.props.beast.description} onClick={this.handleClickModal}/>
                   <Card.Text>
                       {this.props.beast.description}
                    </Card.Text>
                    <Card.Text>
                       <p>Horns: {this.props.beast.horns}</p>
                    </Card.Text>
                   <Button variant='outline-danger' onClick={this.handleFavorite}> &hearts; {this.state.favorited}</Button>
               </Card.Body>
           </Card>

           
           </div>
        )
    }
}

export default Hornedbeast;