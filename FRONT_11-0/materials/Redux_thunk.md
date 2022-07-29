## Redux-thunk

Для начала работы с redux-thunk установите пакет [redux-thunk](https://github.com/reduxjs/redux-thunk) в ваш проект.

```
import thunk from 'redux-thunk';

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));

```
Итак, мы импортировали Redux Thunk и добавили его в наше приложение.

Пример использования:

```
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment())
    }, 1000)
  }
}

function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
 }
}

```
Преимуществом использования redux-thunk является то, что компонент не знает, что выполняется асинхронное действие.

Т.к. промежуточный слой автоматически передает функцию dispatch в функцию, которую возвращает генератор действий, то снаружи, для компонента, нет никакой разницы в вызове синхронных и асинхронных действий (и компонентам больше не нужно об этом беспокоиться).
