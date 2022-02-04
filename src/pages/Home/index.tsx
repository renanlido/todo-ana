import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Checkbox, Button, IconButton, Switch } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { FaTrash } from 'react-icons/fa';
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
  id?: string;
  value: string;
  checked?: boolean;
};

type TaskTypes = {
  input: string;
  checkbox: boolean;
};

const Home: React.FC = () => {
  const { handleToggleTheme, toggleTheme } = useToggleTheme();
  const { register, handleSubmit } = useForm<TaskTypes>();
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const onChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxState = event.target.checked;

    handleToggleTheme(checkboxState);
  };

  const onChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newArray = tasks.map(task => {
      if (task.id === id) {
        return { ...task, checked: event.target.checked };
      }

      return task;
    });

    setTasks(newArray);
  };

  const onSubmit = (data: TaskTypes) => {
    const dataValue = {
      id: uuid(),
      value: data.input,
      checked: false
    };

    setTasks([...tasks, dataValue]);
  };

  const handleDelete = (data: TaskProps) => {
    const filter = tasks.filter(task => task.id !== data.id);

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
                <ContentList key={task.id}>
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
                      {...register('checkbox', {
                        onChange: event =>
                          onChangeCheckbox(event, task.id as string)
                      })}
                    />
                    <ListText isChecked={!!task.checked}>{task.value}</ListText>
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

          <Input placeholder="Inclua uma nova tarefa" {...register('input')} />

          <Button w="full" variant="solid" colorScheme="purple" type="submit">
            Salvar
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export { Home };
