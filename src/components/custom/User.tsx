import { FC } from "react";
import { NameType } from "@/types-and-interfaces";

export interface UserProps {
  name: NameType;
  email: string;
}

const User: FC<UserProps> = ({ name, email }) => {
  return (
    <li className='py-3'>
      <div>
        Name: {name.first} {name.last}
      </div>
      <div>Email: {email}</div>
    </li>
  );
};

export default User;
