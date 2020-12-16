import React from 'react';

function TableRow({headers, element, index, clickText, clickFunction}) {
    return (
        <tr className = {
            //Set on every 2nd row the property odd
            (index & 1) ? "odd" : ""
        }>{
            //Create a cell for every property of the underlying object
            headers.map(header => <td> {element[header]} </td>)
            }
            {(typeof clickText !== 'undefined' || typeof clickFunction !== 'undefined') ? 
            <td onClick={() => clickFunction(element, index)} className="button">{clickText}</td> : ""}
        </tr>      
    );
}

export default TableRow;