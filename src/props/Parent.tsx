import { Child } from './Child';

//* Parent that receive from Child
const Parent = () => {
  return <Child color="red" onClick={() => console.log('Clicked')} />;
};

export default Parent;
