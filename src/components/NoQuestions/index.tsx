
import emptyImg from '../../assets/images/empty-questions.svg'; 

import * as Styled from './styles';

type NoQuestionProps = {
    title?: string;
    subtitle?: string;
}

export function NoQuestions({title, subtitle}: NoQuestionProps){
    return (
        <Styled.NoQuestions>
            <img src={emptyImg} alt="Imagem mostrando sem nenhuma pergunta ainda." />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </Styled.NoQuestions>
    );
}