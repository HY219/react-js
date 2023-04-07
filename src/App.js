import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

//Input으로 전달될 모든 속성을 가진 오브젝트를 담을 수 있다.
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
