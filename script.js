let users = [];

const createUser = async (username, password) => {
  const user = { username, password };
  users.push(user);
  console.log(`User created: ${username}`);
  return user;
};

const readUser = async (username) => {
  const user = users.find((user) => user.username === username);
  if (user) {
    console.log(`User found: ${username}`);
    return user;
  } else {
    console.log(`User not found: ${username}`);
    return null;
  }
};

const updateUserDetails = async (username, newPassword) => {
  const user = users.find((user) => user.username === username);
  if (user) {
    user.password = newPassword;
    console.log(`User updated: ${username}`);
    return user;
  } else {
    console.log(`User not found: ${username}`);
    return null;
  }
};

const deleteUser = async (username) => {
  const index = users.findIndex((user) => user.username === username);
  if (index !== -1) {
    users.splice(index, 1);
    console.log(`User deleted: ${username}`);
    return true;
  } else {
    console.log(`User not found: ${username}`);
    return false;
  }
};

// Example
(async () => {
  await createUser("Mary", "pwd123");
  await createUser("John", "pwd456");

  const user = await readUser("Mary");
  if (user) {
    await updateUserDetails("Mary", "newpwd");
    await deleteUser("Mary");
  }
})();
