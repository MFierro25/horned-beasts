import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeastModal from './SelectedBeastModal';



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

  

    render () {
        return (
        <div>
           <Card style={{width: '16rem'}}>
               <Card.Body>
               <Card.Title>{this.props.beast.title}</Card.Title>
               <Card.Img variant='top'
            src = {this.props.beast.image_url}
            title = {this.props.beast.title}
            description = {this.props.beast.description} />

                   <Card.Text>
                       {this.props.beast.description}
                   </Card.Text>
                   <Button variant='outline-danger' onClick={this.handleFavorite}> &hearts; {this.state.favorited}</Button>
               </Card.Body>
           </Card>

           <SelectedBeastModal />
           </div>
        )
    }
}

export default Hornedbeast;