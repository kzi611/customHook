import { useReducer } from 'react';

const initialState = {
  count: 0,
  count16: 0,
  count17: 0
};

const reducer = (state, action) => {
  switch (action.message) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'COUNT_AGE_16':
      return { ...state, count16: state.count16 + 1 };
    case 'COUNT_AGE_17':
      return { ...state, count17: state.count17 + 1 };
    default:
      return state;
  }
};

const useCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCount = () => {
    dispatch({ message: "INCREMENT_COUNT" });
  };
  const countAge16 = (age) => {
    if (age > 16) {
      dispatch({ message: "COUNT_AGE_16" });
    }
  };
  const countAge17 = (age) => {
    if (age < 17) {
      dispatch({ message: "COUNT_AGE_17" });
    }
  };
  return { state, incrementCount, countAge16, countAge17 };
};

export default useCount;