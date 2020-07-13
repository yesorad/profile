const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
});

const initialState = {
  isDark: true,
};

export default function theme(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
}
