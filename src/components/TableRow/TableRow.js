import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td`
   display: ${props => props.show ? 'cell' : 'none'};
`;

const TableRow = ({ index, user, show }) => {
    return (
            <tr>
                <StyledTd show={show['id']}>
                    {index}
                </StyledTd>
                <StyledTd show={show['name']}>
                    {user.name}
                </StyledTd>
                <StyledTd show={show['age']}>
                    {user.age}
                </StyledTd>
                <StyledTd show={show['date']}>
                    {(user.date).substring(0, 10)}
                </StyledTd>
            </tr>
    );
}

export default TableRow;