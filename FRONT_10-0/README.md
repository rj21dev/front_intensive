#  Lesson 10.
## Contents

1. [Chapter I](#chapter-i) \
   1.1. [Маршрутизация](#маршрутизация) \
   1.2. [React route hooks](#react-route-hooks) \
   1.3. [Защита маршрутизации](#защита-маршрутизации) 
2. [Chapter II](#chapter-ii) \
   2.1. [Styled components](#styled-components) 
## Chapter I

В этой главне мы мы поговорим о такой важной составляющей любого серьезного веб-приложения, как маршрутизация. 
  
### Маршрутизация

В любом реальном веб-приложении нужны маршруты, и приложение React не исключение. Пользователь должен видеть, где он находится в приложении в любой момент времени. А видит он свое текущее местоположение в адресной строке браузера. Следовательно приложение должно уметь сопоставлять определённый URL с соответствующей ему страницей. Также должна работать история.

Сам по себе React не предоставляет такой возможности, это задача специальных библиотек. Как правило, используя API такой библиотеки мы подключаем компоненты страниц нашего положения, сопоставляя их с определёнными путями. После этого, переходя с одной страницы на другую мы будем видеть в адресной строке, как изменяется текущий путь.

На данный момент есть несколько популярных библиотек для маршрутизации: react-router, router5, aviator и пр. Мы будем использовать [**react-router**](./materials/React_router.md).

### React route hooks
React Router предоставляет несколько хуков для доступа к состоянию роутера и навигации внутри компонентов.

`-` useHistory \
`-` useLocation \
`-` useParams \
`-` useRouteMatch 

[Немного подробнее про каждый из них](./materials/React_router_hooks.md).
### Защита маршрутизации

Реализация приватных роутов с помощью react-router строится на написании HOCa, который владеет информацией о том является ли пользователь авторизованым(или на основании какого нибудь другого свойства) и в зависимости от этого строит приватный маршрут или совершает редирект(показывает другой компонент).

## Chapter II

### Styled components

Для стилизации приложения React существует множество вариантов. Традиционно создается внешний файл CSS, после чего атрибуты в виде строки передаются свойству className.

Кроме того, можно воспользоваться техникой CSS-in-JS, которая предусматривает написание CSS в файле JavaScript. И Styled Components предполагает как раз данный подход.

[Преимущества Styled Components](./materials/Styled_components.md)

**Упражнение 1.** \
Сегодня вам предстоить сделать полноценное приложение! Заказчик хочет сделать платформу, где люди смогут откликаться на вакансии работадателей. [ТЗ проекта](./src/chapter_2/Chapter_2.md)

>Пожалуйста, оставьте обратную связь по проекту в [форме обратной связи.](https://forms.gle/ppqnHgETi8hVJr5M7)
