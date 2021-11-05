import React, {Component} from 'react'
import Like from '../components/common/like';
import Table from '../components/common/table';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { key: 'like' , content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />},
    { key: 'delete', content: movie => <button type="button" className="btn btn-danger" onClick={() => this.props.onDelete(movie)}>Delete</button> },
  ]

  render() {
    const { movies, sortColumn, onSort} = this.props;
    return (
      <Table data={movies} sortColumn={sortColumn} onSort={onSort} columns={this.columns} />
    );
  }
}
 
export default MoviesTable;