import React from 'react';
import axios from 'axios';
import { Row, Col,CardHeader } from 'reactstrap';
import RepoDisplay from './components/RepoDisplay';
import Search from './components/search';

class Repo extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        respos: [],
        filteredRepo: []
      }
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(result){
      if(result === ''){
        return <h2>No Data Found</h2>
      } else {
        axios.get(`https://api.github.com/search/repositories?q=${result}`).then((response) => {
        this.setState({respos: response.data.items, filteredRepo: response.data.items})
      })
      this.setState(prevState => ({
        respos: prevState.filteredRepo.filter(repo => repo.name.indexOf(result) !== -1)
      }))
      }      
    }

    render(){
      const headerStyle = {
        paddingLeft: "150px"
      };

      let reposData = this.state.respos.map((repo,index) =>{
        return(
          <div key = {index}>
             <Col>
                  <RepoDisplay repo={repo} />
             </Col>
          </div>
        )
      })

      return(
          <div>
            <CardHeader style = {headerStyle}> Git Repo Search Filter
            <Search handleSubmitForm = {this.handleSubmitForm} />
            </CardHeader><br/>

              <Row>
               {reposData}
              </Row>

          </div>
      )
    }
}

export default Repo;