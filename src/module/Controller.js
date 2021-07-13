import DataUser from "../DataUser";
class Controller extends DataUser{
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

    let user =  this.user;
    let data = this.data;
        
    this.setState({
          data,
          user,
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
    
    EditCMT = (ev, i, index) => {
          let data = this.state.data;
          this.setState({modal: !this.state.modal});
          this.state.index = i;
          this.state.indez = index;
          this.state.text = data[i].comment[index].content;
          console.log(i, index);
          this.setState({data});
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
    
    
      PostOut = () => {
        let out = this.state.text;
        return out;
    }
}
export default Controller