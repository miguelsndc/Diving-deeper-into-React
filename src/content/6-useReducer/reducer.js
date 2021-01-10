export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const filterTerm = action.payload;
    const newPeople = state.people.filter((person) => person.id !== filterTerm);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item removed sucessfully",
    };
  }

  throw new Error("no matching action type");
};
