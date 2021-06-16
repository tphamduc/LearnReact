import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { Button, Col, Container, Row , Label,CardImg,input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
        super(props)    
        this.state = {
              data: [],
              user: {},
              status: false,
              text: '',
        }
  }

  componentDidMount(){
        this.getData();
  }
  getData(){

        let user ={
              id: '1910',
              name: 'Trung',
        }

        let data = 
        [
            {
            author : "Trung",
            content : "content 1",
            text: '',
            comment : [
                {
                    author : "User 1",
                    content : "Super thought out! I think clients would love this.",
                    like: false,
                    dislike: false,
                },
    
                {
                    author : "User 2",
                    content : "Background image, hero, shapes, concept – beastly :-)",
                    like: false,
                    dislike: false,
                }],
            },

            {
            author : "Nhung",
            content : "content 2",
            text: '',
            comment : [
                {
                    author : "User 3",
                    content : "Super thought out! I think clients would love this.",
                    like: false,
                    dislike: false,
                },
    
                {
                    author : "User 4",
                    content : "SBackground image, hero, shapes, concept – beastly :-)",
                    like: false,
                    dislike: false,
                },
            ],
        }
    ];
        this.setState({
              data,
              user
        });

  }
  likeComment = (ev, i, index) => {
    let data = this.state.data;
    data[i].comment[index].like = !data[i].comment[index].like;
    this.setState({data});      
}
  changeText = (ev, i) => {
      let data = this.state.data;
      data[i].text = ev.target.value;
      this.setState({data});
  }

  onSubmit = (ev , i) => {
      let {data, user} = this.state;
      let obj = {
          author : user.name,
          content : data[i].text,
      }
      data[i].comment.push(obj);
      data[i].text = '';
      this.setState({
          data
      });
  }
  toggle = () => {
      this.setState({
          modal: !this.state.modal
      })
  }

  render() {
    let {data, modal} = this.state;
    let arr = Object.values(data).map(key => key);
    // user-post
    let item = arr.map((c, i) => {
          return (
            <div className="App">
            <Container className="appDemo" style={{padding:"20px", border:"2px solid black", padding:"20px"}}>
              <Row className = "post"> 
                   <Col className = "avartar" xs="3">
                       <CardImg src alt style={{border : "2px solid black", height:"70px"}}></CardImg>
                       <h3>{c.author}</h3>
                   </Col>
                   <Col className="content" xs="9" >
                     <span  style={{width:"101%", height:"300px"}} type="text" >{c.content}</span>
                     <Button onClick={this.toggle}>Edit</Button>
                   </Col>
              </Row>
     
              <Row className = "Comment-other" style={{marginTop: "10px"}}>
                    <Col xs={{ 'size' : '10', 'offset' : '2'  }}>
                      {c.comment.map((cm, index) => {
                              return(
                              <Row key={index} style={{ 'backgroundColor' : 'lightgray' }}>
                                  <Col xs={2}>
                                       {cm.author}
                                 </Col>
                                 <Col xs={8}>
                                        {cm.content}
                                 </Col>
                                 <Col xs="1">
                                     <button class="material-icons" style={{fontSize:"20px", color : c.comment[index].like ? 'blue' : null, 'cursor' : 'pointer'}} onClick={ev => this.likeComment(ev, i, index)}>like</button>
                                  </Col>
                                  <Col xs={1}>
                                  <Button onClick={this.toggle}>Edit</Button>
                                 </Col>
                                 </Row>
                                    )
                                })}
             
            <Row className="Comment-User" style={{marginTop:"20px"}} xs="12">
              <input  style={{width:"70%", height:"150px", marginLeft:"15%"}} type="text" placeholder="my comment" value={c.text} onChange = {ev => this.changeText(ev, i)}></input>
            </Row>
              <Row className="button">
                   <Button onClick={(ev) => this. onSubmit(ev ,i) }>Comment</Button>
              </Row>
            </Col>   
      </Row>
              </Container>
      </div>
                
            
          )});

  return (
  <div>
      <Container style={{padding:"20px"}}>
      
          {item}
      
      </Container>
      <div>
          
          <Modal isOpen={modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                  {data.content}
              </ModalBody>
              <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Update</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
      </div>
  </div>)
}
}

export default App;
