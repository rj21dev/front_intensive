## Redux saga

Генераторы (Generators) это функции которые могут быть остановлены и продолжены, вместо выполнения всех выражений в один проход.

Когда вы вызываете функцию-генератор, она возвращает объект-итератор. И с каждым вызовом метода итератора next() тело функции-генератора будет выполняться до следующего yield выражения и затем останавливаться.

Пример использования:
Предположим, что у нас есть интерфейс для извлечения некоторых пользовательских данных с удаленного сервера при нажатии кнопки. 

```
function UserComponent(props) {
  const dispatch = useDispatch()
  ...
  function onSomeButtonClicked() {
    const { userId } = props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  }
  ...
}
```
Компонент диспатчит action в виде простого объекта в Store. Мы создадим сагу, которая слушает все USER_FETCH_REQUESTED экшены и триггерит вызовы API для извлечения пользовательских данных.

```
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Запускаем `fetchUser` на каждый задиспатченый экшен `USER_FETCH_REQUESTED`.
  Позволяет одновременно получать данные пользователей.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
```

Для запуска нашей саги, мы подключим ее к Redux Store, используя redux-saga мидлвар.

```
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// создаем saga мидлвар
const sagaMiddleware = createSagaMiddleware()
// монтируем его в Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// затем запускаем сагу
sagaMiddleware.run(mySaga)

// рендерим приложение
```

[Ссылка на документацию](https://redux-saga.js.org)
