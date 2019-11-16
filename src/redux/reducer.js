const initialState = {
  items: [
    {id: 1, label: 'drink coffee', done: false},
    {id: 2, label: 'code', done: false},
    {id: 3, label: 'studing', done: false},
    {id: 4, label: 'walking with dog', done: false}
  ],
  filter: 'all'
};

const ActionsType = {
  GET_ITEMS: `GET_ITEMS`,
  GET_FILTER: `GET_FILTER`
};

const ActionCreators = {
  getItems: (items) => {
    return {
      type: ActionsType.GET_ITEMS,
      payload: items,
    };
  },
  getFilter: (filter) => {
    return {
      type: ActionsType.GET_FILTER,
      payload: filter,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.GET_ACTIVE_OFFER: return Object.assign({}, state, {
      items: action.payload
    });
    case ActionsType.GET_NEAREST_PLACES: return Object.assign({}, state, {
      filter: action.payload
    });
    default: return state;
  }
};

export {reducer, ActionCreators, ActionsType};
