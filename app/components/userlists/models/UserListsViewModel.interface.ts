import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import { NullableRef } from "@/app/types";

export type UserListsUser = {
  id: string;
  name: string;
};

export interface UserListsViewModel {
  inputReference: RefObject<NullableRef<HTMLInputElement>>;
  userName: string;
  users: UserListsUser[];
  handleUserNameChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddUser: () => void;
  handleInputKeyDown: (
    event: KeyboardEvent<HTMLInputElement>
  ) => void;
  handleRemoveUser: (userId: string) => void;
}
