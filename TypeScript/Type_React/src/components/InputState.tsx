import { useState } from "react";
type User = {
  name: string;
  age: number;
};
const Hooks = () => {
  const [user, setUser] = useState<User>({ name: "", age: 0 });
  function handleClick() {
    setUser({
      name: "",
      age: 0,
    });
    console.log(user);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="flex flex-col gap-10">
      <input
        placeholder="Name"
        value={user?.name}
        onChange={handleChange}
        name="name"
        type="text"
        className="px-10 py-4 border-2 border-black rounded-md"
      />
      <input
        value={user?.age}
        placeholder="age"
        onChange={handleChange}
        type="number"
        name="age"
        className="px-10 py-4 border-2 border-black rounded-md"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded text-white bg-green-500 hover:bg-green-700"
      >
        Click to set The user
      </button>
    </div>
  );
};

export default Hooks;
