# 1. 디렉토리, 파일생성하고 패키지 설치, 설계하기

-   디렉토리

```
/
| - /node_moduels
| - /src
| --- /board
| ------- /board.route.js
| --- /user
| ------- /user.route.js
| --- index.js
| - /views
| - /public
| - package.json
| - package-lock.json
| - server.js
```

-   패키지 설치

```sh

npm init -y
npm install express nunjucks
```

-   server.js 서버만들기
-   express,nunjucks 설치
-   src, public, views 디렉토리 생성
    -   src : board, user
    -   public : css, js, images
    -   view : list, write, view, modify html
    -   render 되는지 꼭 확인해보기

# 2. router 와 controller 나누기

```
GET /
GET /boards/list
GET /boards/write
GET /boards/view
GET /boards/modify

POST /boards/write
POST /boards/modify
POST /boards/delete

GET /users/login
GET /users/join

POST /users/login
POST /users/join

총 12개의 라우터
```

-   src --> `index.js`

    -   router 담고 exporst 하기
    -   boardRouter 가져오기

-   src --> board --> `board.router.js`

    -   router 담고 exports 하기
    -   controller 가져오기

-   src --> board --> `board.controller.js`

    -   boardService 가져오기
    -   핸들러함수 exports 해서 router에 넣어주기

-   `server.js`
    -   src index.js router 가져오기
    -   res.send() 확인해보기

# 3. entity 작성하기

-   src --> board --> `board.entity.js`
-   class Board 만들고 module.exports 내보내기

# 4. repository 작성하기

-   src --> board --> `board.repository.js`
-   class Board 가져오기
-   exports로 함수내보내면서 작업하기
    -   findAll
    -   create
    -   findOne

# 5. service 작성하기

-   src --> board --> `board.service.js`
-   repository 가져오기
-   exports로 함수내보내면서 작업하기
-   create
-   getFindOne
-   getFindAll

# 6. list 작업하기

-   view --> board --> `list.html`
    -   nunjucks 반복문 사용하기
-   src --> board --> `board.controller.js`

# 7. write 작업하기

-   view --> board --> `write.html`

# 8. view 작업하기

-   view --> board --> `view.html`

# 9. 조회수 올리기

-   src --> board --> `board.repository.js`
    -   incrementHit

# 10. Delete 작업하기

-   src --> board --> `board.repository.js`
    -   delete

# 11. Update 작업하기

-   src --> board --> `board.repository.js`
    -   update
