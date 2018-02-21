// Action Types

export const Types = {
  ENABLE: 'modalVisible/ENABLE',
  DISABLE: 'modalVisible/DISABLE',
};

// Reducer

const initalState = {
  modalVisible: false,
};

export default function modalVisible(state = initalState, action) {
  switch (action.type) {
    case Types.ENABLE:
      console.tron.log(state);
      return { ...state, ...action.playload };
    default:
      return state;
  }
}

// Action Creators

export function enableModalVisible() {
  return {
    type: Types.ENABLE,
    playload: {
      status: true,
    },
  };
};

export function disableModalVisible() {
  return {
    type: Types.DISABLE,
    playload: {
      status: false,
    }
  }
}