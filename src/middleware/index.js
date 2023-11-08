//cada vez que se dipare una acción, va a obtener la info de esa acción y hacer un console.log

export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
  };
  
  export const featuring = (store) => (next) => (actionNew) => {
    const featured = [{ name: 'mariana' }, ...actionNew.payload]; 
    const updatedActionInfo = {
      ...actionNew, //todo lo de actionNew
      payload: [...featured] //pero ahora el payload va a ser la lista modificada
    };
    next(updatedActionInfo);
  };

// next: función que se llama cuando el middleware haya terminado y manda el action al reducer
