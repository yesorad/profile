const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

const initialState = {
  isModal: false,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModal: !state.isModal,
      };
    default:
      return state;
  }
}
