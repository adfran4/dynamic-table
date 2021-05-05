import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

import TableHeader from '../../components/TableHeader/TableHeader'
import TableRow from '../../components/TableRow/TableRow'

const StyledTable = styled.table`
    width: 50%;
    border: 1px solid #000;
    margin: 50px auto;

    & th, td {
        border: 1px solid #000;
    }

    & tr {
        text-align: center;
    }

    & tfoot td {
        font-weight: bold;
    }
`

const Table = ({ headers, users, changePage, page, onSort, visibilityOptions }) => {
    return (
            <StyledTable>
                <TableHeader headers={headers} sorting={onSort} show={visibilityOptions} />
                <tbody>
                    {!isEmpty(users) && users.map((user, index) => 
                        <TableRow key={index} index={index} user={user} show={visibilityOptions} />)
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <div>page: {page}</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <button onClick={() => changePage('prev page')}> prev page </button>
                            <button onClick={() => changePage('next page')}> next page </button>
                        </td>
                    </tr>
                </tfoot>
            </StyledTable>
    );
}

export default Table;