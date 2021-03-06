import styled, { css } from 'styled-components';

interface TextProps {
  isChecked: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  align-items: center;
  padding-top: 60px;
  padding: 60px 20px 20px 20px;

  background-color: ${({ theme }) => theme.backgroundColor};

  @media (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  margin-bottom: 30px;
`;

export const Moon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Sun = styled.img`
  width: 24px;
  height: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 440px;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.texts.aplicationTitle.fontWeight};
  font-size: ${({ theme }) => theme.texts.aplicationTitle.fontSize};
  color: ${({ theme }) => theme.texts.aplicationTitle.color};
  margin-bottom: 24px;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Card = styled.form`
  flex: 1;
  background-color: ${({ theme: { card } }) => card.colors.backgroundColor};
  box-shadow: ${({ theme: { card } }) => card.colors.boxShadow};
  padding: 35px;
  border-radius: 20px;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 3px;

  background-color: aliceblue;
  border-radius: 50%;
  box-shadow: (0px 4px 20px rgba(0, 0, 0, 1));
`;

export const HeaderWrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  margin-left: 20px;
  flex: 1;
`;

export const HeaderTitle = styled.h2`
  font-size: ${({ theme: { texts } }) => texts.cardTitle.fontSize};
  font-weight: ${({ theme: { texts } }) => texts.cardTitle.fontWeight};
  color: ${({ theme: { texts } }) => texts.cardTitle.color};
  line-height: 25px;
  margin-bottom: 6px;
  text-align: start;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const NoTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    img {
      width: 70px;
    }
  }
`;

export const NoTasksText = styled.h2`
  font-size: ${({ theme: { texts } }) => texts.cardTitle.fontSize};
  font-weight: ${({ theme: { texts } }) => texts.cardTitle.fontWeight};
  color: ${({ theme: { texts } }) => texts.cardTitle.color};
  line-height: 25px;
  margin-bottom: 6px;
  text-align: start;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const HeaderSubtitle = styled.h3`
  font-size: ${({ theme: { texts } }) => texts.cardSubTitle.fontSize};
  font-weight: ${({ theme: { texts } }) => texts.cardSubTitle.fontWeight};
  color: ${({ theme: { texts } }) => texts.cardSubTitle.color};
`;

export const Hr = styled.div`
  border: 1px solid ${({ theme: { divider } }) => divider};
  margin: 30px 0;
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow: auto;
  max-height: 300px;
`;

export const ContentList = styled.li`
  display: flex;
  flex: 1;

  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ListText = styled.p<TextProps>`
  color: ${({ theme: { texts } }) => texts.taskText.colors.active};
  font-size: ${({ theme: { texts } }) => texts.taskText.fontSize};
  font-weight: ${({ theme: { texts } }) => texts.taskText.fontWeight};

  ${({ isChecked }) =>
    isChecked &&
    css`
      text-decoration: line-through;
    `}
`;

export const Input = styled.input`
  background: ${({ theme: { textAreaInput } }) =>
    textAreaInput.colors.background};
  flex: 1;
  width: 100%;
  border-radius: 10px;
  padding: 12px;
  color: ${({ theme: { textAreaInput } }) => textAreaInput.colors.text};
  font-size: ${({ theme: { textAreaInput } }) => textAreaInput.fontSize};
  font-weight: ${({ theme: { textAreaInput } }) => textAreaInput.fontWeight};
  margin-bottom: 20px;
`;
