import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCode = {
    code: string;
}

export function RoomCode(props: RoomCode){

    function copyRoomCode() {
        navigator.clipboard.writeText(props.code);
        toast.success('Código copiado com sucesso!');
    }

    return (
        <button className="room-code" onClick={copyRoomCode}>
            <div>
                <img src={copyImg} alt="Copiar código" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    );
}