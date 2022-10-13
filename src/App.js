import Profile from "./profile/Profile";

function App() {
  const handlename = name => alert(name);
  return (
    <div>
     <Profile name='willem berchiche' profession="student" bio="test" handlename={handlename}></Profile>
    </div>
  );
}

export default App;
