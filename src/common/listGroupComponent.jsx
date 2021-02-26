import React from 'react';
import { genres } from './../services/fakeGenreService';

const ListGroup = (props) => {
    const { items, textProperty, valueProerty, onItemSelected, selectedItem } = props;
    return (
        <div>
            <h4 className="text-light mx-4">Filter Genres</h4>
            <ul className="list-group mt-2">
                {items.map((item) => {
                    return <li key={item[valueProerty]} className={item === selectedItem ? "list-group-item active  bg-dark text-light" : "list-group-item "} onClick={() => onItemSelected(item)} >{item[textProperty]}</li>
                })}
            </ul>
        </div>
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProerty: "_id"
}
export default ListGroup;