export const initialState = {
  users: [
    { id: 1, username: "Mark" },
    { id: 2, username: "John" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      const filterUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filterUsers,
      };

    default:
      return state;
  }
};
