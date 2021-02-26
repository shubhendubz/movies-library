import React from 'react';

const TableHeader = (props) => {
    const { onSort, sortColumn, columns } = props;
    const raiseSort = (path) => {
        // const sortColumn = { ...sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'desc';
        }
        onSort(sortColumn)
    }
    const renderSortIcon=(column)=>{
            const {sortColumn} = props;
            if(column.path !== sortColumn.path) return null;
            if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
            return <i className="fa fa-sort-desc"></i>
    }
    return (
        <>
            <thead>
                <tr >
                    {columns.map((column) => {
                        return (
                            <th key={column.path || column.key} onClick={() => raiseSort(column.path)}>
                                {column.label} {renderSortIcon(column)}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        </>
    );
}

export default TableHeader;