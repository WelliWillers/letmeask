import { FormEvent, useState } from 'react';
import { useHistory  } from 'react-router-dom'
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

//imagens
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import '../../global/auth.scss';

//components
import { Button } from '../../components/Button/index';
import toast from 'react-hot-toast';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [ roomCode, setRommCode] = useState('');
  
    async function handleCreateRoom() {
      if (!user) {
        await signInWithGoogle()
      }
  
      history.push('/rooms/new');
    }

    async function handleJoinRomm(event:FormEvent ) {
      event.preventDefault();

      if(roomCode.trim() === ''){
        toast.loading('Digite o código da sala!');
        return;
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      if(!roomRef.exists()) {
        toast.error('Esta sala não existe!');
        return;
      }
      
      if(roomRef.val().endedAt){
        toast.error('Esta sala já foi encerrada pelo administrador!');
        return;
      }

      history.push(`rooms/${roomCode}`);
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
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form>
              <input 
                type="text"
                placeholder="Digite o código da sala"
                onChange={event => setRommCode(event.target.value)}
                value={roomCode}
              />
              <Button onClick={handleJoinRomm} type="submit">
                Entrar na sala
              </Button>
            </form>
          </div>
        </main>
      </div>
    )
  }