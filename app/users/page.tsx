import { useEffect } from 'react';
import { Usuario } from '../utils/interfaces'

export default function usersPage() {
    const URL = `https://fakerapi.it/api/v1/users?_quantity=1&_gender=male`
    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
    return (
      <div className="flex h-full flex-col items-center justify-between p-24">
        <h1 className="text-yellow-400 font-bold text-3xl">Users</h1>
      </div>
    );
  }
  