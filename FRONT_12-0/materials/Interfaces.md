## Interfaces

```
interface User {
    id: number;
    name: string;
}
```
Интерфейс в фигурных скобках определяет два свойства: id, которое имеет тип number, и name, которая представляет строку. 

```
const employee: User = {
    id: 1, 
    name: "Tom"
}
```
По сути employee - обычный объект за тем исключением, что он имеет тип User. Если правильнее говорить, то employee реализует интерфейс User. Причем эта реализация накладывает на employee некоторые ограничения. Так, employee должен реализовать все свойства и методы интерфейса User, поэтому при определении employee данный объект обязательно должен включать в себя свойства id и name.

При этом свойства в интерфейсах можно сделать необзязательными, доступными только для чтения или задать им свой тип. Кроме свойств интерфейсы могут определять функции. Также интерфейсы можно расширять и наследовать.
