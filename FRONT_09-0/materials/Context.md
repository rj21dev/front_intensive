## Создание контекста
Для создания контекста достаточно воспользоваться методом React.createContext, он имеет единственный параметр, в который можно передать дефолтное значение или объект для получения дочерних компонентов через контекст.

```
const context = React.createContext('value');
```


## Компонент Provider
После создания контекста, его требуется использовать совместно с компонентом Provider, который позволяет дочерним компонентам подписаться на его изменения. Если проще, то благодаря компоненту Provider все дочерние компоненты могут получить значения, которые мы ему передаем.

Пример:
```
<Сontext.Provider value={"value"}>
```
Данный компонент имеет props value, в котором можно указать значение для передачи всем дочерним компонентам.

## useContext
```
const value = useContext(Context)
```
Хук имеет один параметр, в который требуется передать объект контекста, получаемый при вызове React.createContext.

Важно! При изменении значений в контексте, компонент, который содержит useContext, всегда будет перерендериваться.
