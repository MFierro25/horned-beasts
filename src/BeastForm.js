import { Component } from "react";
import Form from 'react-bootstrap/Form'




class BeastForm extends Component {


render () {
    return (
        <div>
            <Form>
            <Form.Select aria-label="Default select example" onChange={this.filteredBeast}>
                <option>Select How Many Horns you would like to see?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">More than 2</option>
                <option value="all">All</option>
            </Form.Select>
            </Form>
         
        </div>
    )
}
}

export default BeastForm;