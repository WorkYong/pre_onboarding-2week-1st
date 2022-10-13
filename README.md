# 하이클라우드 - 커뮤니티 어플리케이션
![JavaScript Badge](https://img.shields.io/badge/TypeScript-F7DF1E?style=for-the-badge&logo=TypeScript&logoColor=white)&nbsp;
<img src="https://img.shields.io/badge/JSON Web Tokens-339933?style=for-the-badge&logo=JSON Web Tokens&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/NestJS-000000?style=for-the-badge&logo=NestJS&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Passport-85EA2D?style=for-the-badge&logo=Passport&logoColor=white"/>&nbsp;
## 개요
원티드 프리온보딩 백엔드 코스 3차 과제 입니다. 

유저들이 서로 친구를 맺고 글을 올릴 수 있는 커뮤니티 어플리케이션 입니다.

어플리케이션 기능을 이용하기 위한 회원가입 기능부터 데이터베이스 저장 및 조회, 게시판 글쓰기, 댓글 달기, 좋아요, 팔로우 추가 및 차단을 구현 하였습니다.

- 개발기간: 2022.10.11 - 2022.10.14 (3일)
- 개발인원: 김교은, 김민우, 김현정, 박정용(PM) 



## 프로젝트 실행 방법

- 사전에 Git, node, MySQL이 설치되어있어야 합니다.

```shell
# 레포지토리 클론
$ git clone https://github.com/WorkYong/pre_onboarding-2week-1st.git

# 접속
$ cd pre-onboarding-2week-1st

# 패키지 설치
$ npm install

# 데이터베이스 생성
mysql> create database 데이터베이스명 character set utf8mb4 collate utf8mb4_general_ci; 

# 프로젝트 실행
$ npm start : dev

# server start : http://localhost:3000
```


## 프로젝트 구조
### DB모델링

![2주차 - 하이퍼클라우드](https://user-images.githubusercontent.com/102202607/195594286-da020cfd-6a88-49d4-8c3c-375303c579c5.png)



## 구현 기능에 대한 소개

### 1. 좋아요, 댓글 기능 (김교은)

-

---


### 2. 게시판 CRUD 기능 (김민우)

1.게시글 생성 : 
 - title/content/user_id/status를 req.body로 받아와서 게시물을 생성
 - validationPipe를 사용한 유효성 검증
2. 게시글 조회 
 - Param을 통해 전달받은 id값으로 게시글 id별 게시글 조회
 - 존재하지 않는 id값 입력시 에러반환
 - 전체 게시글 조회
3. 게시글 삭제
 - Param을 통해 전달받은 id값으로 게시글 id별 게시글 삭제
 - ParseIntPipe를 통한 유효성 검증
 - 삭제 후 삭제완료 메세지 리턴
4. 게시글 수정
 - req.body 를 통해 전달받은 값으로 게시글id별 내용 수정

---



### 3. 팔로우 추가, 차단 (김현정)

사용자 팔로우/언팔로우 & 차단/차단 해제 기능을 만들었습니다.
1. 사용자를 팔로우 할 때는 팔로우를 한 사람이 상대방에게 차단되었는지 확인을 합니다.
2. 혹은 이미 팔로우 한 사용자인지 확인하여 팔로우를 할 수 있습니다.
3. 잘못된 사용자를 차단하였을 경우 해제할 수 있게 해제 기능도 구현하였습니다.

---



### 4. 회원가입, 로그인 기능 (박정용)

- email과 password를 req.body로 받아와 회원가입을 합니다.
- 유효성검사로 인하여 email이 중복되면 존재하는 이메일 처리하였습니다.
- bcrypt를 이용하여 비밀번호 암호화를 하였습니다.
- JWT TOKEN과 PayLoad를 이용하여 인증 인가를하여 토큰을 발급합니다.
- 로그인이 완료됩니다

## API doc

### Postman

- 김교은 : ()  👉 [Postman API doc]
- 김민우 : (게시글 CRUD)  👉 [Postman API doc](https://documenter.getpostman.com/view/22703204/2s83zpK1X6#48ffc49a-3ece-4dbf-b51c-59e7f3e0612c)
- 김현정 : (사용자 팔로우/언팔로우 & 차단/차단해제)  👉 [Postman API doc](https://documenter.getpostman.com/view/22723303/2s83zpJg3C#intro)
- 박정용 : (회원가입, 로그인) 👉 [Postman API doc](https://documenter.getpostman.com/view/22204904/2s83zpK1Da)
