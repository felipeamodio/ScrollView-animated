import React, { useState, useRef } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';

import { ProgressBar } from '../../components/ProgressBar';

import * as S from './styles';

type ScrollProps = {
    layoutMeasurement: {
        height: number;
    };
    contentOffset: {
        y: number;
    };
    contentSize: {
        height: number;
    };
}

export function Post(){
    const [percentage, setPercentage] = useState(0);

    const scrollRef = useRef<ScrollView>(null);

    const dimensions = useWindowDimensions();

    function scrollPercentage({layoutMeasurement, contentOffset, contentSize}: ScrollProps){
        const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);

        const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
        setPercentage(value < visibleContent ? 0 : value);
    }

    function handleScrollMoveTop(){
        scrollRef.current?.scrollTo({
            x: 0,
            y: 0,
            animated: true
        })
    }

    return(
        <S.Container>
            <S.Scroll 
                ref={scrollRef}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{paddingTop: 100}}
                onScroll={(event) => scrollPercentage(event.nativeEvent)} //metodo pra pegar informações do usuário na scroll, fica observando o evento de scroll
                >
            <S.Title>Lorem ipsum</S.Title>

                <S.ContainerContent>
                    <S.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Phasellus laoreet sem non ante faucibus venenatis id non dolor. Nulla pretium laoreet quam, non hendrerit lacus laoreet et. Ut quis tempor metus. Maecenas nisi justo, elementum sed fringilla vitae, tincidunt non magna. Sed posuere egestas egestas. Morbi leo elit, porttitor dapibus mattis sed, ullamcorper nec metus. Vivamus non lectus vel nunc viverra gravida. Praesent cursus magna at porttitor blandit. Aenean auctor neque eget semper elementum. Duis quis justo eu est semper porttitor. Nunc malesuada finibus urna id tristique. Suspendisse potenti. Nulla tempus ut leo quis ullamcorper. Nunc posuere sollicitudin justo, eget luctus ligula laoreet a.
                    </S.Content>
                    <S.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    </S.Content>
                    <S.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Phasellus laoreet sem non ante faucibus venenatis id non dolor. Nulla pretium laoreet quam, non hendrerit lacus laoreet et. Ut quis tempor metus. Maecenas nisi justo, elementum sed fringilla vitae, tincidunt non magna. Sed posuere egestas egestas. Morbi leo elit, porttitor dapibus mattis sed, ullamcorper nec metus. Vivamus non lectus vel nunc viverra gravida. Praesent cursus magna at porttitor blandit. Aenean auctor neque eget semper elementum. Duis quis justo eu est semper porttitor. Nunc malesuada finibus urna id tristique. Suspendisse potenti. Nulla tempus ut leo quis ullamcorper. Nunc posuere sollicitudin justo, eget luctus ligula laoreet a.
                    </S.Content>
                    <S.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id mi eu magna convallis facilisis et eu urna. Morbi a sem et erat molestie facilisis. Pellentesque tortor tortor, ullamcorper ac vulputate vel, condimentum non erat. Donec a massa at magna dictum feugiat. Fusce congue leo id libero feugiat, vehicula faucibus leo interdum. Donec tempor aliquam odio sed lobortis. Sed placerat hendrerit consectetur. Pellentesque pulvinar tortor ac risus sagittis facilisis.
                    Phasellus laoreet sem non ante faucibus venenatis id non dolor. Nulla pretium laoreet quam, non hendrerit lacus laoreet et. Ut quis tempor metus. Maecenas nisi justo, elementum sed fringilla vitae, tincidunt non magna. Sed posuere egestas egestas. Morbi leo elit, porttitor dapibus mattis sed, ullamcorper nec metus. Vivamus non lectus vel nunc viverra gravida. Praesent cursus magna at porttitor blandit. Aenean auctor neque eget semper elementum. Duis quis justo eu est semper porttitor. Nunc malesuada finibus urna id tristique. Suspendisse potenti. Nulla tempus ut leo quis ullamcorper. Nunc posuere sollicitudin justo, eget luctus ligula laoreet a.
                    </S.Content>
                </S.ContainerContent>
            </S.Scroll>

            <ProgressBar 
                value={percentage} 
                onMoveTop={handleScrollMoveTop}    
            />
        </S.Container>
    )
}