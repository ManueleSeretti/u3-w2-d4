const initialState = {
  jobs: {
    content: [],
  },
  companys: {
    content: [],
  },
  companysFavourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return { ...state, jobs: { ...state.jobs, content: action.payload } };
    case "SET_COMPANYS":
      return { ...state, companys: { ...state.companys, content: action.payload } };
    case "ADD_COM_FAV":
      return {
        ...state,
        companysFavourites: {
          ...state.companysFavourites,
          content: [...state.companysFavourites.content, action.payload],
        },
      };
    case "DEL_FAV":
      return {
        ...state,
        companysFavourites: {
          ...state.companysFavourites,
          content: state.companysFavourites.content.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
