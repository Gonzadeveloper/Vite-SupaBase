const UserList = ({ users, setEditingUser, deleteUser }) => {
    return (
      <div>
        <h2>Lista de Usuarios</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: 1 }}>{user.name} ({user.email})</span>
              <button onClick={() => setEditingUser(user)}>
                ✏️ Editar
              </button>
              <button onClick={() => deleteUser(user.id)}>
                ❌ Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;
  