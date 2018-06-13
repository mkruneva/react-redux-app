export function selectBook(book) {
    // selectBook is action creator, it returns object with type and payload
    return {
        type: 'BOOK_SELECTED', // always uppercase 
        payload: book
    }
}