// Action Types

export const Types = {
  ENABLE: 'modalVisible/ENABLE',
  DISABLE: 'modalVisible/DISABLE',
};

// Reducer

const initalState = [];

export default function modalVisible(state = initalState, action) {
  switch (action.type) {
    case Types.ENABLE:
      return [ ...state, action.playload ];
    default:
      return state;
  }
}

// Action Crestors

export function enableModalVisible() {
  return {
    type: Types.ENABLE,
    playload: {
      status: true,
    },
  };
};