function validateReg(data) {
  const { name, password, email, role } = data;

  if (!name || !password || !email || !role) {
    throw new Error(
      "Name, password, email and role are required"
    );
  }

  if (typeof name !== "string" || !name.trim()) {
    throw new Error("Name is required");
  }

  if (name.trim().length < 3) {
    throw new Error("Name must be at least 3 characters");
  }

  if (typeof password !== "string" || !password.trim()) {
    throw new Error("Password is required");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error("Password must contain an uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    throw new Error("Password must contain a lowercase letter");
  }

  if (!/[0-9]/.test(password)) {
    throw new Error("Password must contain a number");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    throw new Error(
      "Password must contain at least one special character"
    );
  }

  if (typeof email !== "string" || !email.trim()) {
    throw new Error("Email is required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    throw new Error("Please provide a valid email");
  }

  if (typeof role !== "string" || !role.trim()) {
    throw new Error("Role is required");
  }

  if (!["user", "admin"].includes(role.trim())) {
    throw new Error("Role must be either user or admin");
  }
}

module.exports = {
  validateReg,
};