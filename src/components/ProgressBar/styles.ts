import styled from 'styled-components/native';

export const Container = styled.View`
    width: 200px;
    height: 56px;
    background-color: #29292E;
    position: absolute;
    bottom: 32px;
    align-self: center;
    border-radius: 32px;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
`;

export const Percentage = styled.Text`
    color: #C4C4CC;
    margin-right: 7px;
`;

export const Tracker = styled.View`
    flex: 1;
    height: 3px;
    border-radius: 3px;
    background-color: #505059;
`;

export const Progressbar = styled.View`
    height: 3px;
    background-color: #8257E5;
`;