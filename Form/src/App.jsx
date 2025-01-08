import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { supabase } from "./supabase";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Obtener usuarios al cargar la página
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) console.error(error);
    else setUsers(data);
  };

  const addUser = async (user) => {
    const { data, error } = await supabase.from("users").insert([user]);
    if (error) console.error(error);
    else setUsers((prev) => [...prev, ...data]);
  };

  const updateUser = async (user) => {
    const { data, error } = await supabase
      .from("users")
      .update(user)
      .eq("id", user.id);
    if (error) console.error(error);
    else {
      setUsers((prev) =>
        prev.map((u) => (u.id === data[0].id ? data[0] : u))
      );
      setEditingUser(null);
    }
  };

  const deleteUser = async (id) => {
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) console.error(error);
    else setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>CRUD Usuarios con Supabase</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <UserList
        users={users}
        setEditingUser={setEditingUser}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default App;
