import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostApiAction, UpdateApiAction } from "../redux/action/action";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import getDetailsbyHook from "../hooks/getDetailsbyHook";

const UpdateDetails = () => {
  const { id } = useParams();
  console.log("Param id is .....", id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [detailById] = getDetailsbyHook(id);
  console.log("detailsById is ----", detailById);

  useEffect(() => {
    const data = () => {
      if (detailById.data) {
        setName(detailById.data.name);
        setEmail(detailById.data.email);
        setPhone(detailById.data.phone);
        setCountry(detailById.data.country);
      }
    };
    data();
  }, [detailById.data]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finaldata = {
      name: name,
      email: email,
      phone: phone,
      country: country,
    };
    dispatch(UpdateApiAction(finaldata, id));
    navigate("/");
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
              defaultValue={name}
              onChange={(e) => nameHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              defaultValue={email}
              onChange={(e) => emailHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
              defaultValue={phone}
              onChange={(e) => phoneHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry">Country</label>
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              placeholder="Country"
              defaultValue={country}
              onChange={(e) => countryHandler(e)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UpdateDetails;
