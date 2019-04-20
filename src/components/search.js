import React from 'react';
import { Container } from 'reactstrap';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmitForm(this.state.value);
    }

    render(){
        const headersearch = {
            marginLeft: "-97px"
        }

        return(
            <div>
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value = {this.state.value} style={headersearch} placeholder="search" onChange={this.handleChange}/>{' '}
                        <button type="submit" value="Submit">search</button>
                    </form>
                </Container>
            </div>
        )
    }
}

export default Search;