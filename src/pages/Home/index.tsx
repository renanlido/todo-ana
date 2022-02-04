import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { Checkbox, Button, IconButton, Switch } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import avatar from '../../assets/avatar/avataaars.svg';
import moon from '../../assets/icons/moon-svgrepo-com.svg';
import sun from '../../assets/icons/sun-svgrepo-com.svg';
import emoji from '../../assets/images/emoji.png';

import {
  Container,
  SwitchContainer,
  Moon,
  Sun,
  Content,
  Title,
  Card,
  Header,
  Avatar,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  NoTasks,
  Hr,
  ContainerList,
  ContentList,
  ListText,
  Input,
  NoTasksText
} from './styles';
import { useToggleTheme } from '../../hooks';

type TaskProps = {
  value: string;
  checked: boolean;
};

const Home: React.FC = () => {
  const { handleToggleTheme, toggleTheme } = useToggleTheme();
  const { register, handleSubmit } = useForm<TaskProps>();
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const onChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxState = event.target.checked;

    handleToggleTheme(checkboxState);
  };

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxState = event.target.checked;

    setIsChecked(checkboxState);
  };

  const onSubmit = (data: TaskProps) => {
    const dataValue = {
      value: data.value,
      checked: isChecked
    };

    setTasks([...tasks, dataValue]);
  };

  const handleDelete = (data: TaskProps) => {
    const filter = tasks.filter(task => task.value !== data.value);

    setTasks(filter);
  };

  return (
    <Container>
      <Content>
        <SwitchContainer>
          <Switch
            colorScheme={
              toggleTheme.title === 'light' ? 'purple' : 'blackAlpha'
            }
            alignItems="center"
            justifyContent="center"
            pt={1}
            onChange={onChangeSwitch}
            defaultChecked={false}
          />
          {toggleTheme.title === 'light' ? (
            <Sun src={sun} />
          ) : (
            <Moon src={moon} />
          )}
        </SwitchContainer>
        <Title>Ana&#39;s To-do</Title>

        <Card onSubmit={handleSubmit(data => onSubmit(data))}>
          <Header>
            <Avatar
              src={avatar}
              style={{
                backgroundColor:
                  toggleTheme.title === 'light' ? 'beige' : 'aliceblue'
              }}
            />
            <HeaderWrapper>
              <HeaderTitle>a lista de compras da ana</HeaderTitle>
              <HeaderSubtitle>tudo o que eu preciso do mercado</HeaderSubtitle>
            </HeaderWrapper>
          </Header>

          <Hr />

          {tasks.length === 0 ? (
            <NoTasks>
              <NoTasksText style={{ lineHeight: 1.5 }}>
                Ops, não temos tarefas para hoje... Adicione uma!
              </NoTasksText>
              <img src={emoji} alt="emoji" width={100} />
            </NoTasks>
          ) : (
            <ContainerList>
              {tasks.map(task => (
                <ContentList>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flex: 1,
                      gap: 20,
                      marginLeft: 5
                    }}
                  >
                    <Checkbox
                      colorScheme={
                        toggleTheme.title === 'light' ? 'purple' : 'blackAlpha'
                      }
                      checked={task.checked}
                      onChange={onChangeCheckbox}
                    />
                    <ListText isChecked={isChecked}>{task.value}</ListText>
                  </div>
                  <IconButton
                    aria-label="Excluir"
                    size="xs"
                    variant="ghost"
                    icon={<FaTrash color="red" fill=" #B33F40" />}
                    onClick={() => handleDelete(task)}
                  />
                </ContentList>
              ))}
            </ContainerList>
          )}

          <Hr />

          <Input placeholder="Inclua uma nova tarefa" {...register('value')} />

          <Button w="full" variant="solid" colorScheme="purple" type="submit">
            Salvar
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export { Home };
