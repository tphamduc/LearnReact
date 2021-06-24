// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { Button, Col, Container, Row ,CardImg, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
        super(props)    
        this.state = {
              data: [],
              user: {},
              status: false,
              status_cmt: 'block',
            status_recmt:'none',
              index: 0,
              indez :0,
              modal:false,
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
            id: '1910',
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
            id: '2304',
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
        },

        {
            author : "Tuan",
            id: '1810',
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
  toggle = (ev,i) => {
      let data = this.state.data; 
      this.setState({modal: !this.state.modal});
      this.state.index =i ;
      console.log(this.state.index);
      this.state.text = data[i].content;
  };

  TEXTFIX = (ev) =>{
    this.state.text = ev.target.value;
}

  EditContent = () => {
    let data = this.state.data;
        let ix = this.state.index;
        if(typeof(data[ix]) != 'undefinded' )
        {
            data[ix].content = this.state.text;
        }
        this.setState({data,
            modal: !this.state.modal})
}
EditContentCMT = () => {
    let data = this.state.data;
        let ix = this.state.index;
        let iz = this.state.indez;
        if(typeof(data[ix].comment[iz]) != 'undefinded' )
        {
            console.log(data[ix].comment[iz]);
            data[ix].comment[iz].content = this.state.text;
        }
        this.setState({data,
            modal: !this.state.modal})
}
  EditCMT = (ev, i, index) => {
    let data = this.state.data;
    this.setState({modal: !this.state.modal});
    this.state.index = i;
    this.state.indez = index;
    this.state.text = data[i].comment[index].content;
    this.setState({data});
  }

  PostOut = () => {
    let out = this.state.text;
    return out;
}


  render() {
    let {data, modal, user} = this.state;
    let arr = Object.values(data).map(key => key);
    // user-post
    let item = arr.map((c, i) => {
          return (
            <div className="App">
            <Container className="appDemo" style={{padding:"20px", border:"1px solid black", padding:"20px"}}>
              <Row className = "post"> 
                   <Col className = "avartar" xs="3">
                       <CardImg src alt style={{border : "2px solid black", height:"70px"}}></CardImg>
                       <h3>{c.author}</h3>
                   </Col>
                   <Col className="content" xs="9" >
                     <span  style={{width:"101%", height:"300px"}} type="text" >{c.content}</span>
                     <button  onClick={(ev) => this.toggle(ev, i)} style={{display:(user.id === c.id) ? "block" : "none"}}>Edit</button>
                   </Col>
              </Row>
                {/* //comment */}
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
                                  <button  onClick={(ev) => this.EditCMT(ev, i, index)} style={{display:(user.name === cm.author) ? "block" : "none"}}>Edit</button>
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
          
          <Modal isOpen={modal}  toggle={(ev)=>this.toggle(ev, 0)}>
              <ModalHeader toggle={(ev)=>this.toggle(ev, 0)}>Modal title</ModalHeader>
              <ModalBody>
                <input type="textarea" className="inputPost" defaultValue={this.PostOut()} onChange={(ev) => this.TEXTFIX(ev)}></input>
              </ModalBody>
              <ModalFooter>
              <Button color="primary" onClick={this.EditContent} >Update</Button>
              <Button color="primary" onClick={this.EditContentCMT}>UpdateCMT</Button>
              <Button color="secondary" onClick={(ev)=>this.toggle(ev, 0)}>Cancel</Button>
              </ModalFooter>
          </Modal>
      </div>
  </div>)
}
}
export default App;
