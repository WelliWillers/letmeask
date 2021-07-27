import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';

import * as Styled from './styles';

type RoomCode = {
    code: string;
}

export function RoomCode(props: RoomCode){

    function copyRoomCode() {
        navigator.clipboard.writeText(props.code);
        toast.success('Código copiado com sucesso!');
    }

    return (
        <Styled.Button className="room-code" onClick={copyRoomCode}>
            <div>
                <img src={copyImg} alt="Copiar código" />
            </div>
            <span>{props.code}</span>
        </Styled.Button>
    );
}