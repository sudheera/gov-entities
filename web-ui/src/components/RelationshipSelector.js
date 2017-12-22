import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import Schema from './Schema.json';


class RelationshipSelector extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.selected_rel;
    }
    
    handleChange = (e, { name }) => {
        this.props.reload(name);
    }
  
    render() {
        return (
            <Form.Field>
            {
                Schema.properties.map( (ep) => {
                    if (ep.type === 'rel') {
                        return <Checkbox key={ ep.name } toggle label={ ep.name } onChange={ this.handleChange } name={ ep.name } checked={ this.state[ep.name] } />;
                    }
                    return null;
                })
            }
            </Form.Field>
        )
    }
    
}

export default RelationshipSelector;