import {Component} from 'react';
import Hornedbeast from './Hornedbeast';
import createdBeast from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends Component {
   
    render() {
        return (
            <div>
          <Container>
              <Row xs={1} sm={2} md={3} lg={4}>
              {createdBeast.map(beast => (
                      <Hornedbeast beast={beast} />
                  ))}
              </Row>
          </Container>
          </div>
        )}
    }

export default Main;