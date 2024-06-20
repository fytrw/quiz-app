import '../styles/Opening.css';

const Opening = ({quizes, setSelectedQuiz}) => {
  return (
    <div className='opening'>
        <div className="opening-info">
            <h1>Welcome to the <span>Frontend Quiz!</span></h1>
            <p>Pick a subject to get started.</p>
        </div>
        <div className="quiz-select">
        {quizes.map(quiz => (
            <div className='quiz-button' key={quiz.title} onClick={()=>setSelectedQuiz(quiz.title)}>
            <div className='icon-wrapper' style={{backgroundColor: quiz.color}}>
                <img src={quiz.icon} alt={`${quiz.title} Icon`} />
            </div>
            <span className="button-title">{quiz.title}</span>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Opening;