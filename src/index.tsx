import ReactDOM from 'react-dom/client';
import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <UserSearch />
      {/* <EventComponent /> */}
    </div>
  );
};

root.render(<App />);
