import React, { useState } from 'react';
import styled from 'styled-components';

import inputTypes from '../../utils/inputTypes';

const StyledUserInput = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: bold;

    & input {
        width: 30%;
        margin: 5px 0;
    }

    & button {
        width: 20%;
        margin: 5px auto;
    }
`

const UserInput = ({ properties, addNewUser}) => {
    const initialState = {
        id: '',
        name: '',
        age: '',
        date: ''
    };
    const [ user, addUser ] = useState(initialState);

    const prepareNewUser = (e) => {
        const { name, value } = e.target;        

        addUser({...user, [name]: value });
    };

    const sendNewHeader = user => {
        addNewUser(user);
        addUser(initialState);
    };

    return (
        <StyledUserInput>
            <span>
                Add a new user:
            </span>
            {properties.map((property, index) => {
                if(property !== 'id') {
                    return <React.Fragment key={index}>
                                <label>{property}:</label>
                                <input  name={property} 
                                        onChange={prepareNewUser}
                                        value={user[property]} 
                                        type={inputTypes[property]} />
                            </React.Fragment>
                }

                return null;
            })}
            <button onClick={() => sendNewHeader(user)}>
                Save
            </button>
        </StyledUserInput> 
    );
}

export default UserInput;