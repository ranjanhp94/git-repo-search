import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import GitHubButton from 'react-github-btn'
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck, Container } from 'reactstrap';

class RepoDisplay extends React.Component{
    render(){
        const img = {
            borderRadius: "75%",
            height: 310,
            width: 310
        }
        
        const text = {
            width: 300,
            numberOfLines: 1
        }

        const body1 = {
            margin: 30,
            marginTop: 20,
            paddingTop: 50,
            height: 580
        }

        return(
            <div>
                <Container> 
                <CardDeck>
                    <Card style = {body1} body className="text-center">
                        <CardImg top width = "100%" style={img} src = {this.props.repo.owner.avatar_url} alt = "image 1" />
    
                            <CardBody>
                                <CardTitle>{this.props.repo.name}</CardTitle>

                                <CardText style = {text}>{this.props.repo.description}</CardText>
                                
                                        <div>
                                            <p>
                                            <GitHubButton href="#" data-icon="octicon-repo-forked" aria-label="Fork ntkme/github-buttons on GitHub">Fork {this.props.repo.forks}</GitHubButton>{' '}
                                            
                                            <GitHubButton href="#" data-icon="octicon-star" aria-label="Star ntkme/github-buttons on GitHub">{this.props.repo.watchers}</GitHubButton>{' '}
                                        
                                            <GitHubButton href="#" data-icon="octicon-issue-opened"  aria-label="Issue ntkme/github-buttons on GitHub">Open Issues {this.props.repo.open_issues}</GitHubButton>
                                            </p>
                                        </div>

                                        <a href={this.props.repo.html_url} className="btn btn-primary" role="button">VIEW PROFILE</a>
                            </CardBody>
                    </Card>
                </CardDeck>
                </Container>
            </div>
        )  
    }
}

export default RepoDisplay;