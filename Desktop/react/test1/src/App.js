import logo from './logo.svg';
import './App.css';

function App() {
    // const name = '행복';
    // const AnimalType = '푸들';

    // const a = 3;
    // const b = 5;
    // const c = a + b;

    // const d = 6;
    // const e = 7;
    // const f = 8;

    // const title = '제목';

    const name = 'yoon';
    const styles = {
        backgroundColor: 'yellow',
        color: 'red',
        fontSize: '40px',
    };
    const name1 = '로이';
    const animal = '강아지';

    const a = 10;
    const b = 8;

    const title = 'Hello Word';

    if (name === 'gildon') {
        console.log(name + '입니다.');
    } else {
        console.log('누구세요?');
    }

    return (
        <>
            <div className="App">
                {/* JSX 문법 */}
                {/* 
              1. 하나로 감싸인 요소 
              2. javascript 표현식 사용
                - {}로 감싸면 js 표현식 사용 가능
                - {}에서 삼항 연산자 사용 가능 (if문 안된다!) 
              3. style 속성
              - 리액트에서 돔요소에 스타일 적용시 문자열은 안됨 -> 객체 사용
              - 스타일 속성 이름 중에서 하이픈(-) 포함시 camelCase사용
              */}
                <div>{name} 안녕하세요!</div>
                <div>{name === 'gildon' ? 'gildon 입니다.' : name === '한나' ? '한나입니다' : '누구세요?'}</div>
                <div style={{ backgroundColor: 'blue', color: 'white', fontSize: '48px' }}> 스타일 적용</div>
            </div>
            <div style={styles}>style 적용 2</div>

            {/* <div>실습1</div>
                <div>제 반려동물의 이름은 {name}입니다.</div>
                <div>
                    {name}는 {AnimalType}입니다.
                </div>

                <div>실습2</div>
                <div>{c === 8 ? '정답입니다.' : '오답입니다.'}</div>

                <div>실습3</div>
                <div>
                    {e}는{e > d && e < f ? d + '보다 크고' + f + '보다 작습니다.' : '?'}
                </div>

                <div>실습4</div>
                <div>{title}</div>
                <legend>로그인</legend>
                <input type="text"></input>
                <legend>비밀번호</legend>
                <input type="password"></input>
                <div>{Login}</div> */}
        </>
    );
}

export default App;
