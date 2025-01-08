import { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  // Si estamos editando, actualizamos el formulario
  useEffect(() => {
    if (editingUser) setFormData(editingUser);
    else setFormData({ id: "", name: "", email: "" });
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email)
      return alert("Todos los campos son obligatorios.");
  
    if (editingUser) {
      updateUser(formData);
    } else {
      addUser({
        name: formData.name,
        email: formData.email,
      });
    }
  
    setFormData({ id: "", name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingUser ? "Actualizar" : "Agregar"}</button>
    </form>
  );
};

export default UserForm;
