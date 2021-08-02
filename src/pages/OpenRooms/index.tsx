import { useHistory } from 'react-router-dom'

// autenticação
import { useRoomsOpened } from '../../hooks/useRoomsOpened';

import illustrationImg from '../../assets/images/illustration.svg';

import * as Styled from '../../global/authPages';

//components
import { Button } from '../../components/Button';
import { ToggleTheme } from '../../components/ToggleTheme';

export function OpenRooms(){
    const {rooms} = useRoomsOpened();
    const history = useHistory();

    // const openRooms = rooms.filter(room => !room.endedAt);


    function handleEnterRoom(id: string){
        history.push(`/rooms/${id}`);
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
                    <span>
                        <ToggleTheme />
                    </span>
                    <h2>Selecione uma sala</h2>
                    {
                      rooms.map(room => {
                        return (
                            <Button btnType="fill" onChange={() => handleEnterRoom(room.id)} type="submit">
                                {room.name}
                            </Button>
                          )
                      })  
                    }
                    
                </Styled.Content>
            </Styled.Main>
        </Styled.Container>
    );
}
