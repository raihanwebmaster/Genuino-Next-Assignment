import { useRouter } from "next/dist/client/router";
import React from "react";
import UserDetails from "../../components/UserDetails/UserDetails";


const UserDetailsPage = () => {
  const router = useRouter();
  return <UserDetails userId={router.query.id} />;
};

export default UserDetailsPage;
