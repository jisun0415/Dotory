import React, {Component} from 'react';
import './diary-page.css';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import Control from "./components/Control"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"

class DiaryPage extends Component { //자바랑 거의 비슷 subject를 객체지향으로 코딩했으므로 추가해도 계속 생김
    constructor(props){
      super(props);
      this.max_content_id=3;
    this.state ={
      mode:'welcome',
      selected_content_id:2,
      subject:{ title: 'DIARY'},
      welcome:{title:'', desc:''},
      contents:[
        {id:1, title:'#01. 일기',desc:'오늘도 코딩은 정말 재밌다.'},
        {id:2, title :'#02. 일상', desc: '오늘 눈이 내렸다'},
        {id:3, title :'#03. 자유', desc:' 이번달 알바비 100만원, 25일 크리스마스 케이크 예약'}
      ]
    }
  }
  render() {
    
      console.log('App render');
      var _title, _desc, _article =null;

      if(this.state.mode==='welcome'){
        _title=this.state.welcome.title;
        _desc=this.state.welcome.desc;
        _article =<ReadContent title={_title} desc={_desc}></ReadContent>

      }else if(this.state.mode==='read'){
     
         var i=0;
         while(i<this.state.contents.length){
           var data=this.state.contents[i];
           if(data.id===this.state.selected_content_id){
             _title=data.title;
             _desc=data.desc;
             break;
           }
           i+=1;
         }
         _article=<ReadContent title={_title} desc={_desc}></ReadContent>
       } else if (this.state.mode ==='create'){
         _article=<CreateContent onSubmit={function(_title,_desc){
          this.max_content_id=this.max_content_id+1;
          var _contents=this.state.contents.concat( //concat은 원래 배열을 해치지 않고 추가하는 방법 push는 원래 배열 깨고 추가하는 방법인데 concat이 좋음
          {id:this.max_content_id, title:_title, desc: _desc}          
          )
          this.setState({
            contents:_contents
          });
          console.log(_title,_desc);
         }.bind(this)}></CreateContent>
       }
      
      return (
    <div className="App"> 
     <Subject className="TODAY"
      title={this.state.subject.title}
      sub={this.state.subject.sub}
      onChangePage={function(){
        this.setState({mode:'welcome'});
      }.bind(this)}></Subject>
      {_article}
      <Control onChangeMode={function(_mode){
       if(_mode === 'delete'){
        if(window.confirm('really?')){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === this.state.selected_content_id){
              _contents.splice(i,1);
              break;
            }
            i = i + 1;
          }
          this.setState({
            mode:'welcome',
            contents:_contents
          });
          alert('deleted!');
        }
      } else {
        this.setState({
          mode:_mode
        });
      }
      }.bind(this)}></Control>
       <TOC
       onChangePage ={function(id){
         this.setState({
           mode:'read',
           selected_content_id:Number(id)
         });
      }.bind(this)}
      data={this.state.contents}>
      </TOC>
       
      </div>
    );
  }
}

export default DiaryPage;








