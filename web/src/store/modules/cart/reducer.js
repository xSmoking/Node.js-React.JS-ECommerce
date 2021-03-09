import produce from 'immer';
import api from '../../../services/api';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      api.post('/cart').then(response => {
        const { data } = response.data;
      });
      console.log(state);
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];

      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) draft.splice(productIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
