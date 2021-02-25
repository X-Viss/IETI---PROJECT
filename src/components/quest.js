import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';


export class Quest extends React.Component {
    constructor(props) {
      super(props);
        this.state = {text:''};
    }
  
    render() {
        return (
            <div>
                <a>Preguntas</a>
            </div>
        );
    }
  
  }