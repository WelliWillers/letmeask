import { FormEvent } from 'react';
import { useRoom } from '../../hooks/useRomm';
import {useHistory, useParams} from 'react-router-dom';
import { database } from '../../services/firebase';

//componentes 
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { NoQuestions } from '../../components/NoQuestions';


import './styles.scss';
import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

type RoomParams = {
    id: string;
}

export function AdminRoom(){
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const history = useHistory();
    const {questions, title} = useRoom(roomId);

    async function handleEndRoom(){
        
        if(window.confirm('Tem certeza que deseja encerrar esta sala?')) {            
            await database.ref(`/rooms/${roomId}`).update({
                endedAt: new Date(),
            })
        } else {
            return;
        }

        history.push('/');
    }
    
    async function handleDeleteQuestion(questionId: string){
        if(window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }   
    }

    async function handleQuestionAsAnswered(questionId: string){
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });
    }

    async function handleHighligthQuestion(questionId: string){
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        });
    }

 
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />

                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutline onClick={handleEndRoom}>
                            Encerrar Sala
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala <strong>"{title}"</strong></h1>
                     {questions.length > 0 && <span> {questions.length} pergunta(s) </span>} 
                </div>

                {
                    questions.length > 0 
                    ? 
                        <div className="question-list">
                            {questions.map((question, index) => {
                                return (
                                    <Question 
                                        key={question.id}
                                        content={question.content}
                                        author={question.author}
                                        isAnswered={question.isAnswered}
                                        isHighLighted={question.isHighLighted}
                                    >
                                        {
                                            !question.isAnswered && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleQuestionAsAnswered(question.id)}
                                                    >
                                                        <img src={checkImg} alt="Marcar como respondida esta Pergunta" />
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleHighligthQuestion(question.id)}
                                                    >
                                                        <img src={answerImg} alt="Responder Pergunta" />
                                                    </button>
                                                </>
                                            )
                                        }

                                        <button
                                            type="button"
                                            onClick={() => handleDeleteQuestion(question.id)}
                                        >
                                            <img src={deleteImg} alt="Deletar Pergunta" />
                                        </button>
                                    </Question>
                                )
                            })}
                        </div>
                    : 
                    <NoQuestions
                        title="Nenhuma pergunta por aqui..."
                        subtitle="Envie o código desta sala para seus amigos e comece a responder perguntas!"
                    />
                }
            </main>
        </div>
    )
}