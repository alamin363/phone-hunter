import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Admin = () => {

  const {data: users = [], isLoading, error } = useQuery({queryKey:["user"], queryFn: () => fetch("http://localhost:5000/user").then(res => res.json())})
   if (isLoading) {
    return <h1> loading ..</h1>
   }
   console.log(users)
  return (
    <div>
     {
      users?.map(user => <h1>{user?.email}</h1>)
     }
    </div>
  );
};

export default Admin;