import { Button, FormField, Section, SectionTitle } from "@/app/components";
import {
  BUTTON,
  BUTTON_TYPES,
  INPUT_TYPES,
  STRING,
} from "@/app/constants";
import useUserListsViewModel from "./hooks/useUserListsViewModel";

const UserLists = (): JSX.Element => {
  const {
    inputReference,
    userName,
    users,
    handleUserNameChange,
    handleAddUser,
    handleInputKeyDown,
    handleRemoveUser,
  } = useUserListsViewModel();

  return (
    <Section className="max-w-3xl mx-auto rounded-3xl bg-white p-6 shadow-sm">
      <SectionTitle
        text="Lista de usuarios"
        className="text-center"
      />

      <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-end">
        <FormField
          id="user-name"
          name="userName"
          label="Nombre de usuario"
          labelSuffix={STRING.Empty}
          value={userName}
          onChange={handleUserNameChange}
          onKeyDown={handleInputKeyDown}
          reference={inputReference}
          type={INPUT_TYPES.TEXT}
          placeholder="Ingrese un nombre"
        />
        <Button
          type={BUTTON_TYPES.BUTTON}
          variant={BUTTON.PRIMARY}
          onClick={handleAddUser}
          className="h-[46px] w-full sm:w-auto"
        >
          Agregar
        </Button>
      </div>

      <ul className="mt-6 divide-y rounded-xl border border-slate-200 bg-slate-50">
        {users.length === 0 ? (
          <li className="px-4 py-5 text-sm text-slate-500">
            No hay usuarios.
          </li>
        ) : (
          users.map((user) => (
            <li
              key={user.id}
              className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-base text-slate-900">
                {user.name}
              </span>
              <Button
                type={BUTTON_TYPES.BUTTON}
                variant={BUTTON.SECONDARY}
                onClick={() => handleRemoveUser(user.id)}
                className="text-red-600 bg-transparent hover:bg-slate-100"
              >
                Eliminar
              </Button>
            </li>
          ))
        )}
      </ul>
    </Section>
  );
};

export default UserLists;
