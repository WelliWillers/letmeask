import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';

import {useParams} from 'react-router-dom';

import '../styles/room.scss';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { database } from '../services/firebase';
import { useEffect } from 'react';
import { sign } from 'crypto';

type RoomParams = {
    id: string;
}

type FirebaseQuestion = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}>

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}

export function Room(){

    const { user, signInWithGoogle } = useAuth();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', (room) => {
            const databaseRomm = room.val();
            const firebaseQuestions: FirebaseQuestion = databaseRomm.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswered: value.isAnswered,
                }
            });

            setTitle(databaseRomm.title);
            setQuestions(parsedQuestions);
        })

    },[roomId])

    async function handleSendQuestion(event: FormEvent){
        event.preventDefault();

        if(newQuestion.trim() === ''){
            toast.error('Nenhuma pergunta foi feita!');
            return;
        }
        if(!user){
            toast.error('Você deve estar logado!');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar
            },
            isHighLighted: false,
            isAnswered: false,
        };

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId} />
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                     {questions.length > 0 && <span> {questions.length} pergunta(s) </span>} 
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <div className="form-footer">
                        { user ? (
                        <div className="user-info">
                            <img src={user.avatar} alt={user.name} />
                            <span>{user.name}</span>
                        </div>
                        ) : (
                        <span>Para enviar uma pergunta, <button onClick={signInWithGoogle}>faça seu login</button>.</span>
                        ) }
                        <Button type="submit">Enviar pergunta</Button>
                    </div>
                </form>

                {JSON.stringify(questions)}

            </main>
        </div>
    )
}