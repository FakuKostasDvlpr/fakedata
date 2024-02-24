import React from 'react';
import { Usuario } from '../utils/interfaces';

interface CardUserProps {
  userData: Usuario;
}

const CardUser: React.FC<CardUserProps> = ({ userData }) => {
  return (
    <div>
      <h3>User Information</h3>
      <p>Name: {userData.firstName}</p>
      <p>Email: {userData.email}</p>
      <p>Email: {userData.ip}</p>
    </div>
  );
};

export default CardUser;