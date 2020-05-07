import React,{Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state={
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler=this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({
        [e.target.name]:e.target.value
      });
    }
    render(){
      return (
        <article>
        <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              //debugger;
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
                );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title " 
                placeholder="title"
                //input값을 바꿨을때 state값이 바뀌게 해야지만
                //read-only상태가 아닌게 됨.
                //그래서 onChange를 사용.
                value={this.state.title}
                onChange={function(e){
                  this.setState({title:e.target.value});
                }.bind(this)}
              
                >
                </input>
                </p>
              <p> 
                <textarea 
                name="desc" 
                placeholder="description" 
                value ={this.state.desc}
                onChange={this.inputFormHandler}>
                </textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
          </form>
      </article>   
        
    );
    }
  }

export default UpdateContent;