const UserList = ({ users, setEditingUser, deleteUser }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {/* Validar que `users` sea un array */}
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: 1 }}>{user.name} ({user.email})</span>
              <button onClick={() => setEditingUser(user)}>✏️ Editar</button>
              <button onClick={() => deleteUser(user.id)}>❌ Eliminar</button>
            </li>
          ))
        ) : (
          <p>No hay usuarios para mostrar.</p> // Mensaje de fallback si no hay datos.
        )}
      </ul>
    </div>
  );
};

export default UserList;

  