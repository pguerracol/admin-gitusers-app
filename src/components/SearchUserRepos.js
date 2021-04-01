import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";
import { getAllReposByUser } from "../services/gitHubUsersService";

function SearchUserRepos() {

  // column definition for table component
 const columns = useMemo(
  () => [
    {
      Header: "Github repos",
      columns: [
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Url",
          accessor: "html_url"
        },
        {
          Header: "Description",
          accessor: "description"
        },
        {
          Header: "Default branch",
          accessor: "default_branch"
        },
        {
          Header: "Language",
          accessor: "language"
        }
      ]
    }

  ],
  []
);

  // data state to store the user's repos list. Initial value is an empty array
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");

  // Handle event and update state.
  const handleUserNameButtonClick = e => {
    const value = inputRef.current.value || undefined;
    setUserName(value);
  };

  const inputRef = React.createRef();

  // Using useEffect to control api endpoint communication
  useEffect(() => {
    (async () => {
      getAllReposByUser(userName)
      .then(response => { setData(response); })
      .catch(error => { setData([]); })
    })();
  }, [userName]);

  return (
    <div className="App">
      <div className="box">
        <input className="userName"
          ref={inputRef}
          placeholder={"Search repos by github userName, e.g: pguerracol"}
        />
        <button className="btnSearch"
          onClick={handleUserNameButtonClick}
        >
          Search github repos
        </button>
      </div>
      
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SearchUserRepos;
