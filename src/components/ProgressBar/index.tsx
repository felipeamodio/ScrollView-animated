import { useEffect } from 'react';
import Animated, { BounceIn, FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import {Feather} from '@expo/vector-icons';
import * as S from './styles';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    value: number;
    onMoveTop: () => void;
}

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function ProgressBar({value, onMoveTop}: Props){
    const widthContainer = useSharedValue(200);
    
    const endReached = value >= 95;

    const animatedStyle = useAnimatedStyle(() => {
        return{
            width: widthContainer.value
        }
    });

    useEffect(() => {
        widthContainer.value = withSpring(endReached ? 56 : 200, {mass: 0.4});
    }, [value])

    return(
        <Animated.View style={[styles.container, animatedStyle]}>
            {
                endReached ?
                <ButtonAnimated entering={BounceIn} exiting={FadeOut} onPress={onMoveTop}>
                    <Feather name='arrow-up' size={24} color='#C4C4CC' />
                </ButtonAnimated>
                :
            <Animated.View 
                style={styles.content}
                entering={FadeIn}
                exiting={FadeOut}
                >
                <S.Percentage>{value.toFixed(0)}%</S.Percentage>

                <S.Tracker>
                    <S.Progressbar style={{width: `${value}%`}} />
                </S.Tracker>
            </Animated.View>}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: '#29292E',
        position: 'absolute',
        bottom: 32,
        alignSelf: 'center',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})