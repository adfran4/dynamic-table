import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.i`
border: solid #00C400;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
transform: rotate(45deg);
margin-left: 5px;
cursor: pointer;
`;

const StyledHeader = styled.th`
    display: ${props => props.showColumn ? 'col' : 'none'};
`;

const TableHeader = ({ headers, sorting, show }) => {
    return (
            <thead>
                <tr>
                    {headers.map((header, index) => 
                        <StyledHeader key={index} showColumn={show[header]}>
                            {header}
                            <StyledSpan onClick={() => sorting(header)} />  
                        </StyledHeader>)
                    }
                </tr>   
            </thead>
    );
}

export default TableHeader;