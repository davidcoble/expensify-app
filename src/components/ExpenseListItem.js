import React from 'react';
import { Link } from 'react-router-dom'


const ExpenseListItem = ({dispatch, description, amount, note, createdAt, id}) => (
  <div>
      <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt} - {note}</p>

  </div>
);

export default (ExpenseListItem);