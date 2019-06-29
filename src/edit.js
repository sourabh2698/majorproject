import React from 'react'
import ContentEditable from 'react-contenteditable'
 
//npm install react-contenteditable

export default class Editable extends React.Component {
  constructor() {
    super()
    this.contentEditable = React.createRef();
    this.state = {html: "Sourabh"};
  };
 
  handleChange = e => {
    this.setState({html: e.target.value});
  };
 
  render = () => {
    return <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='editor' // Use a custom HTML tag (uses a div by default)
            />
  };
};

//use the component 'Editable' (<Editable/>) in place of your input field it will make your content editable in Browser
