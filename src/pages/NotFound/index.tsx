import { useHistory } from 'react-router-dom';

//componentes 
import { Button } from '../../components/Button';
import { ToggleTheme } from '../../components/ToggleTheme';

import * as Styled from './styles';

import logoImg from '../../assets/images/logo.svg';


export function NotFound(){
    const history = useHistory();

    function handleGoToHome() {
        history.push("/");    
    }

    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Content>
                    <div>
                        <img src={logoImg} alt="Letmeask" />
                        
                    </div>
                    <div>
                        <ToggleTheme />
                    </div>
                </Styled.Content>
            </Styled.Header>

            <Styled.Main>
                <Styled.Title>
                    <h1>Página não encontrada</h1>
                </Styled.Title>
                
                <Button btnType="fill" onClick={handleGoToHome}>
                    Voltar ao início
                </Button>

            </Styled.Main>
        </Styled.Container>
    )
}