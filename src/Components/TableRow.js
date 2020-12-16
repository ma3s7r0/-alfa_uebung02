import React from 'react';

function TableRow({headers, element, index}) {
    return (
        <tr className = {
            //Set on every 2nd row the property odd
            (index & 1) ? "odd" : ""
        }>{
            //Create a cell for every property of the underlying object
            headers.map(header => <td> {element[header]} </td>)
            }
        </tr>      
    );
}

export default TableRow;