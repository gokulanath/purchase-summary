import { combineReducers } from 'redux';

const INITIAL_STATE = {
  pricingDetails: {},
  itemDetails: {},
  loaded: false,
  loading: false
};

const itemReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true
      }
    case 'loaded':
      return {
        ...state,
        pricingDetails: action.pricingDetails,
        itemDetails: action.itemDetails,
        loaded: true,
        loading: false

      };
    
    case 'apply-discount':
      return {
        ...state,
        codeApplied: true,
        pricingDetails: {
          ...state.pricingDetails,
          subtotal: parseFloat((state.pricingDetails.subtotal / 100) * (100 - 10).toFixed(2))
        }
      };
    default:
      return state
  }
};

export default combineReducers({
  item: itemReducer,
});


export const setLoading = () => ({
  type: 'loading'
})

export const setItemDetails = (item) => ({
  type: 'loaded',
  pricingDetails: item.pricingDetails,
  itemDetails: item.itemDetails
})

export const applyDiscount = () => ({
  type: 'apply-discount'
})