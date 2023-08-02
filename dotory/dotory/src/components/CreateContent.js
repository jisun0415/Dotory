import React, {Component} from 'react';

class CreateContent extends Component{
    render(){
        console.log('Content render');
        return(
            <article>
                <h2>create</h2>
                <form action="/creat_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();//페이지를 못바꾸게 하는 코드 우리껄로 바꾸려면 이거 지워야 할듯 
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                 alert('GOOD JOB ლ(╹◡╹ლ)');
                    }.bind(this)}
                >
                    <p ><input className="TEXTTITLE" type="text" name="title" placeholder="title"></input></p>
                    <p ><textarea className="TEXTAREADES" name="desc" placeholder="description"></textarea></p>
                    <p><input className="BUTTON" type="submit" value="submit"></input></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;