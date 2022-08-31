import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sara', age: 20 },
  { name: 'Alex', age: 25 },
  { name: 'Michael', age: 30 },
];

const UserSearch: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        onClick={onClick}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
