import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps (state) {
    // state will be shown as props inside BookList
    return {
        books: state.books
    }
};

// anythign returned will be props of BookList container
function mapDispatchToProps(dispatch) {
    // when any action is called the result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promoto BookList from Componet to Container
// It needs to know about the dispatch method
export default connect(mapStateToProps, mapDispatchToProps)(BookList);