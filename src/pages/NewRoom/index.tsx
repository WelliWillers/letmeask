import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react';

// autenticação
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import * as Styled from '../../global/authPages';

//components
import { Button } from '../../components/Button';
import toast from 'react-hot-toast';

export function NewRoom(){
    const { user } = useAuth();
    const history = useHistory();
    const [newroom, setNewromm] = useState('');

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();

        if(newroom.trim() === ''){
            toast.loading('Opss! Faltou o nome da sala.');
            return;
        }
        
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newroom,
            authorId: user?.id,
        });
 
        history.push(`/admin/rooms/${firebaseRoom.key}`);
    }

    return (
        <Styled.Container>
            <Styled.Aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </Styled.Aside>

            <Styled.Main>
                <Styled.Content>
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewromm(event.target.value)}
                            value={newroom}
                        />
                        <Button btnType="fill" type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </Styled.Content>
            </Styled.Main>
        </Styled.Container>
    );
}
