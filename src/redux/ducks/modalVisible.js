// Action Types

export const Types = {
  ENABLE: 'modalVisible/ENABLE',
  DISABLE: 'modalVisible/DISABLE',
};

// Reducer

const initalState = {
};

export default function modalVisible(state = initalState, action) {
  switch (action.type) {
    case Types.ENABLE:
      return { ...state, ...action.playload };
    default:
      return state;
  }
}

// Action Creators

/*export function enableModalVisible() {
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
*/
export function setModalVisible(status) {
  return {
    type: status === true ? Types.ENABLE : Types.DISABLE,
    playload: {
      status,
    }
  }
}