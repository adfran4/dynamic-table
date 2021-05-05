import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;

    & span {
        margin: 0 10px;
        font-weight: bold;
        cursor: pointer;
    }
`;

const Header = ({ columns, toggleVisibility }) => {
    return (
        <React.Fragment>
            <h4>
                This is a dynamic table which stores users data.
            </h4>
            <StyledDiv>
                <div>
                    Toggle visibility of a column:
                </div>
                <div>
                    {columns.map((column, index) => 
                        <span key={index} onClick={() => toggleVisibility(column)}>
                            {column}
                        </span>)
                    }
                </div>
            </StyledDiv>
        </React.Fragment>       
    );
}

export default Header;