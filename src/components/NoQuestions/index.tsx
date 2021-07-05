
import emptyImg from '../../assets/images/empty-questions.svg'; 

import './styles.scss';

type NoQuestionProps = {
    title?: string;
    subtitle?: string;
}

export function NoQuestions({title, subtitle}: NoQuestionProps){
    return (
        <div className="container-error">
            <img src={emptyImg} alt="Imagem mostrando sem nenhuma pergunta ainda." />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}