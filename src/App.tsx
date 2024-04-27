<<<<<<< HEAD
import GlobalStyles from 'styles/GlobalStyles';

// Lessons
// import Lesson06 from 'lessons/Lesson06/Lesson06';
// import Lesson07 from 'lessons/Lesson07/Lesson07';
// import Lesson08 from 'lessons/Lesson08/Lesson08';
import Lesson09 from 'lessons/Lesson09/Lesson09';

// Homeworks
// import Homework07 from 'homeworks/Homework07/Homework07'
// import Homework08 from 'homeworks/Homework08/Homework08';

// Consultations


function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Lesson06 /> */}
      {/* <Lesson07 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      <Lesson09 />
    </>
=======
import Feedback from 'components/Feedback/Feedback';
import './App.css';
// import AnimalCard from 'components/AnimalCard/AnimalCard';
import Homework07 from 'homeworks/Homework07/Homework07';
// import Lesson07 from './lessons/Lesson07/Lesson07';

function App() {
  return (
    <div className="App">
  {/* <Lesson07/> */}
  <Homework07/>
  {/* <Feedback/> */}
{/* <AnimalCard/> */}
    </div>
>>>>>>> 5b98cf4eddc76c384af29594be7a83460759097a
  );
}

export default App;