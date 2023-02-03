import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteApiAction, GetApiAction } from "../redux/action/action";

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details); //reducer variable name in rootReducer or details

  const handleDelete = (id) => {
    dispatch(DeleteApiAction(id));
    window.location["reload"]();
  };

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  console.log("HOME ", responseData);
  const result = responseData?.map((data, index) => (
    <tr key={index}>
      <th scope="row"> {data.id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.country}</td>
      <td>
        <Link to={`/edit/${data.id}`}>
          <span className="material-symbols-outlined">edit</span>
        </Link>
      </td>
      <td>
        <span
          className="material-symbols-outlined"
          onClick={() => handleDelete(data.id)}
        >
          <span className="delete-user">delete</span>
        </span>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1>React redux Crud Operation | Read Operation</h1>
      <button className="add-user">
        <Link to={`/form`}>Add User</Link>
      </button>
      <div className="css-background-styling"></div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default Home;

/*
//suraj
import React, { useEffect } from "react";
import Action, { fetchDetailsInitiate } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details); //reducer variable name in rootReducer or details
  console.log("response from action ......", responseData);

  // useEffect for initiating data fetching
  useEffect(() => {
    dispatch(fetchDetailsInitiate());
  }, [dispatch]);

  const result = responseData.map((data, index) => (
    <tr key={index}>
      <th scope="row"> {data.id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.country}</td>
    </tr>
  ));

  return (
    <div>
      <h1>React redux Crud Operation | Read Operation</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default Home;

*/
