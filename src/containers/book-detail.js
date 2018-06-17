import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to see the detils</div>
        }
        return (
           <div>
               <h3>Book details for:</h3>
                <h4>{this.props.book.title}</h4> 
                <p>Pages: {this.props.book.pages}</p> 
           </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);