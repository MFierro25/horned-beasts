import {Component} from 'react';
import Hornedbeast from './Hornedbeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends Component {
   
    render() {
        return (
            <div>
          <Container>
              <Row xs={1} sm={2} md={3} lg={4}>
              {this.props.beast.map(beast => 
              <Hornedbeast changeBeast={this.props.changeBeast} beast={beast}/>
                  )}
              </Row>
          </Container>
          </div>
        )}
    }

export default Main;