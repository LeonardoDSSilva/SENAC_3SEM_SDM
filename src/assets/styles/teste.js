import styled from 'styled-components/native';

const COLOR_BACKGROUND = '#FFF';
const COLOR_PRIMARY = '#99CD85';
const COLOR_SECONDARY = '#000';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLOR_BACKGROUND};
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 4px;
  padding-top: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #afe;
`;

export const Button = styled.Button`
  background-color: ${COLOR_SECONDARY};
  color: ${COLOR_PRIMARY};
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  border: 1px solid ${COLOR_PRIMARY};
  height: 45px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  color: ${COLOR_SECONDARY};
  width: 90%;
`;


export const LineHorizontal = styled.View`
  border: 1px solid ${COLOR_PRIMARY};
  width: 90%;
`;

