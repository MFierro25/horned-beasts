import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeastModal extends Component {

    constructor() {
        super()
        this.state = {
          show : false
        }
      }

      hideModal = () => {
        this.setState({ show: false})
    }

    showModal = () => {
        this.setState({show: true})
    }

render() {
    return (
        <div>
            
            <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>title</Modal.Title>
          </Modal.Header>
          <Modal.Body>body stuff</Modal.Body>
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