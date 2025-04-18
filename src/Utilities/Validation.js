export const Validation = (email, password, name) => {
    // console.log(email, password, name, dob);
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isValidName = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);
  if (!isValidEmail) return "Invalid email format";
  if (!isValidPassword) return "Invalid password format";
  if (!isValidName) return "Invalid name format";

  return null;
};
