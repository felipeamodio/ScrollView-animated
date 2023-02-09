import * as S from './styles';

type Props = {
    value: number;
}

export function ProgressBar({value}: Props){
    return(
        <S.Container>
            <S.Percentage>{value}%</S.Percentage>

            <S.Tracker>
                <S.Progressbar style={{width: `${value}%`}} />
            </S.Tracker>
        </S.Container>
    )
}