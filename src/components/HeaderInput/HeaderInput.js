import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHeaderInput = styled.div`
    width: 50%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`

const HeaderInput = ({ addNewHeader }) => {
    const [ property, addNewProperty ] = useState('');

    const setNewProperty = (e) => {
        let value = e.target.value;

        addNewProperty(value);
    };

    const sendNewHeader = header => {
        addNewHeader(header);
        addNewProperty('');
    };

    return (
        <StyledHeaderInput>
            <span>
                Add a new user's property:
            </span>
            
                <input type='text' name='inputHeader' onChange={setNewProperty} value={property} />
                <button onClick={() => sendNewHeader(property)}>
                    Save
                </button>
            
        </StyledHeaderInput>
            
    );
}

export default HeaderInput;