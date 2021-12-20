
import './App.css';
import React from 'react';
import Header from './component/Header';

class App extends React.Component {
render() {
return (
<div className="App  App-header">
<Header name="HTML" since="1993" >
<p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</p>
</Header>
<Header name="CSS" since="1996">
<p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. </p>
</Header>
<Header name="Bootstrap" since="2011" />
<p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. </p>
</div>
);
}
}
export default App;


