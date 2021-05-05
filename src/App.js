import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './containers/Header/Header'
import Table from './containers/Table/Table'
import HeaderInput from './components/HeaderInput/HeaderInput'
import UserInput from './components/UserInput/UserInput'

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ececec;

    & button {
      background-color: #00C400;
      cursor: pointer;
    }
`
const App = () => {
  const [ tableHeaders, addTableHeaders ] = useState(
    ['id', 'name', 'age', 'date']
  );
  const [ shownColumn, setVisibility ] = useState({
    id: true,
    name: true,
    age: true,
    date: true
  });
  const [ users, addUser ] = useState([]);
  const [ page, setPage ] = useState(1);

  //formating data received from API
  const prepareData = data => {
    let arr = [];
    data.map(record => {
      const obj = {
        id: record.id.value,
        name: record.name.first,
        age: record.dob.age,
        date: record.dob.date
      };
      return arr.push(obj);
    })
    addUser(arr);
  };

  //fetching initial data while componentDidMount
  const fetchData = page => {
    fetch(`https://randomuser.me/api/?inc=id,name,dob&nat=gb&results=10&page=${page}&&seed=abc`)
      .then(res => res.json())
      .then(json => prepareData(json.results));
  };

  //method which handles pagination
  const changePage = direction => {
    let requestedPage = page;
      if(direction === 'next page') {
        requestedPage++;
      } else {
        requestedPage--;
      }

      fetchData(requestedPage);
      setPage(requestedPage);
  };


  const addNewHeader = header => {
    const updatedTableHeaders = [...tableHeaders];
    
    updatedTableHeaders.push(header);

    addTableHeaders(updatedTableHeaders);
  };

  const addNewUser = user => {
    const updatedUsers = [...users];
    
    updatedUsers.push(user);

    addUser(updatedUsers);
  };

  const compare = name => {
    return (a,b) => {
      if(a[name] < b[name]) return -1;
      if(a[name] > b[name]) return 1;
      return 0;
    }
  }

  const sortColumn = name => {
    const copy = [...users];
    const sort = copy.sort(compare(name));

    addUser(sort);
  };

  const handleToggle = columnName => {
    const copyHeaders = {...shownColumn};
    
    setVisibility({...copyHeaders, [columnName]: !copyHeaders[columnName]});
  };

  useEffect(() => fetchData(page),[]);

  return (
    <StyledApp>
      <Header columns={tableHeaders} toggleVisibility={handleToggle} />
      <Table headers={tableHeaders} 
             users={users} 
             changePage={changePage} 
             page={page} 
             onSort={sortColumn}
             visibilityOptions={shownColumn}
      />
      <HeaderInput addNewHeader={header => addNewHeader(header)} />
      <UserInput properties={tableHeaders} addNewUser={user => addNewUser(user)} />
    </StyledApp>
  );
}

export default App;
