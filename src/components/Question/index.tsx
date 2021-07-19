import { ReactNode } from 'react';
// import './styles.scss';
import * as Styled from './styles';
import cx from 'classnames';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighLighted?: boolean;
}

export function Question({content, author, children, isAnswered = false , isHighLighted = false}: QuestionProps){
    return(
        <Styled.Container 
            className={cx(
                'question', 
                { answered: isAnswered },
                { highlighted: isHighLighted && !isAnswered },
            )}
        >
            <p>{content}</p>
            <Styled.Footer>
                <Styled.user>
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </Styled.user>
                <Styled.Obtions>
                    {children}
                </Styled.Obtions>
            </Styled.Footer>
        </Styled.Container>
    )
}