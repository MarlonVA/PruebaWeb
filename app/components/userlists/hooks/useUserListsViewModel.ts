import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { KEYBOARD, STRING } from "@/app/constants";
import { NullableRef } from "@/app/types";
import {
  UserListsUser,
  UserListsViewModel,
} from "../models/UserListsViewModel.interface";

const createUserId = (): string =>
  Math.random().toString(36).slice(2, 9);

const useUserListsViewModel = (): UserListsViewModel => {
  const [userName, setUserName] = useState<string>(STRING.Empty);
  const [users, setUsers] = useState<UserListsUser[]>([]);
  const inputReference = useRef<NullableRef<HTMLInputElement>>(null);

  const handleUserNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setUserName(event.target.value);
  };

  const handleAddUser = (): void => {
    const trimmedUserName = userName.trim();
    if (!trimmedUserName) return;

    setUsers((currentUsers) => [
      ...currentUsers,
      { id: createUserId(), name: trimmedUserName },
    ]);
    setUserName(STRING.Empty);
    inputReference.current?.focus();
  };

  const handleInputKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === KEYBOARD.ENTER) {
      event.preventDefault();
      handleAddUser();
    }
  };

  const handleRemoveUser = (userId: string): void => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== userId)
    );
  };

  return {
    inputReference,
    userName,
    users,
    handleUserNameChange,
    handleAddUser,
    handleInputKeyDown,
    handleRemoveUser,
  };
};

export default useUserListsViewModel;
