import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  //타입스크립트에서는 event의 type을 정의해줘야 한다
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //it's same const value = event.currentTarget.value;
    const {
      //currentTarget = target
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  //onsubmit 의 event도 type 명시해주기
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type=' text'
          placeholder='username'
        />
        <button>Log in</button>
      </form>
    </>
  );
}
export default App;
