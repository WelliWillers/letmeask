import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react';

// autenticação
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../global/auth.scss';

//components
import { Button } from '../../components/Button';

export function NewRoom(){
    const { user } = useAuth();
    const history = useHistory();
    const [newroom, setNewromm] = useState('');

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();

        if(newroom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newroom,
            authorId: user?.id,
        });
 
        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewromm(event.target.value)}
                            value={newroom}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    );
}
