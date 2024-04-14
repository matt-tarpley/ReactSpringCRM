import React from "react";

const deleteContact = (id) => {
  fetch(`http://localhost:8080/api/contacts/${id}`, {
    method: "DELETE",
    headers: {
        "content-type": "application/json",
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
  })
  .then(() => {
    window.location.reload();
  })
  .catch(error => {
    console.error('Error deleting contact:', error);
  });     
}


const SingleContact = ({item}) => (
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{item.firstName} {item.lastName}</span>
        </div>
        <div className="card-action">
          <p>{item.email}</p>
          <button onClick={() => deleteContact(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  </div>
)

export default SingleContact;