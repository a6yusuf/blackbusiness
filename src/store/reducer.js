export default function reducer( state = {}, action ) {
    switch ( action.type ) {
      case 'SET_BUSINESSES':
        return {
          ...state,
          businesses: action.businesses,
        };
    }
    return state;
  }