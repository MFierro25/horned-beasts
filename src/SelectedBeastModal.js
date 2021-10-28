import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeastModal extends Component {

      handleClose = () => {
        this.props.hideModal();
    }

    showModal = () => {
        this.setState({show: true})
    }

render() {
  console.log(this.props.featuredBeast);
    return (
        <div>
            
            <Modal show={this.props.show} onHide={this.props.hideModal}>
            <Modal.Header closeButton>
            <Modal.Title>{this.props.featuredBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={this.props.featuredBeast.image_url} alt={this.props.featuredBeast.description} />
              <Card.Body>
                <Card.Title>{this.props.featuredBeast.title}</Card.Title>
                <Card.Text>
                 {this.props.featuredBeast.description}
                </Card.Text>
                <Card.Text>Horns: {this.props.featuredBeast.horns}</Card.Text>
              </Card.Body>
            </Card></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}
}

export default SelectedBeastModal;