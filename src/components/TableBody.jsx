import React from 'react';
import Like from '../common/likeComponent';

const TableBody = (props) => {
    const { movies, handleLike, handleDelete } = props;
    return (
        <>
            <tbody className="col-md-10">
                {movies.map((movie) => {
                    // console.log(movie)
                    return (
                        <tr className="col-md-10" key={movie._id}>
                            <td className="col-md-2">{movie.title}</td>
                            <td className="col-md-2">{movie.genre.name}</td>
                            <td className="col-md-2">{movie.numberInStock}</td>
                            <td className="col-md-2">{movie.dailyRentalRate}</td>
                            <td className="col-md-2">
                                <Like
                                    liked={movie.liked}
                                    onClick={() => handleLike(movie)}
                                />
                            </td>
                            <td className="col-md-2">
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(movie)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
export default TableBody;