// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { Button, Col, Container, Row ,CardImg, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from './module/AppHeader';
import Controller from './module/Controller';

class App extends Controller {
  
  render() {
    let {data, modal, user} = this.state;
    let arr = Object.values(data).map(key => key);
    // user-post
    let item = arr.map((c, i) => {
          return (
            <div className="App">

            <Container className="appDemo" style={{padding:"20px", border:"1px solid black"}}>
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
              <input  style={{width:"70%", height:"150px", marginLeft:"15%"}} type="text" placeholder="My Comment..." value={c.text} onChange = {ev => this.changeText(ev, i)}></input>
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
          <AppHeader heloo3={ (text) => this.gg(text)}/>
        
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
