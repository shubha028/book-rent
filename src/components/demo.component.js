import React, { Component } from 'react';
import Book from './book.component';
import axios from 'axios';

export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {books: []};
      }
      componentDidMount() {
        axios.get('http://localhost:5000/books/')
          .then(response => {
            this.setState({ books: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

  render() {
    return this.state.books.map(currentbook => {
        return <Book title={currentbook.username} description={currentbook.description}/>;

         }     );
    }
}