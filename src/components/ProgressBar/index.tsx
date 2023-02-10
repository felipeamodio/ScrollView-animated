import * as S from './styles';

type Props = {
    value: number;
}

export function ProgressBar({value}: Props){
    return(
        <S.Container>
            <S.Percentage>{value.toFixed(0)}%</S.Percentage>

            {/** toFixed(0) - é pra não mostrar as casas decimais da porcentagem */}

            <S.Tracker>
                <S.Progressbar style={{width: `${value}%`}} />
            </S.Tracker>
        </S.Container>
    )
}