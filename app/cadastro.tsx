import { Screen } from "@/components/Screen";
import Button from "@/components/Button";
import { router } from "expo-router";
import { BottomContent, Content } from "./styles";
import Text from "@/components/Text";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import Select from "@/components/Select";

export default function Cadastro() {
  return (
    <>
      <Header title='Cadastro'>
        <Button onPress={() => router.back()} iconProps={{ name: "chevron-back", size: 40 }} circular />
        <Button onPress={() => {}} iconProps={{ name: "help-circle-outline", size: 50 }} circular />
      </Header>
      <Screen>
        <Content height={"100px"} align='center'>
          <Icon name='person-circle-sharp' size={100} />
        </Content>
        <Content>
          <Content>
            <TextInput label='Nome' bordered fontSize={25} fixedLabel placeholder='Nome' />
            <TextInput label='Sobrenome' bordered fontSize={25} fixedLabel placeholder='Sobrenome' />
            <TextInput label='Email' bordered fontSize={25} fixedLabel placeholder='Email' />
            <Select label='Função' bordered fontSize={25} options={[
              { label: "Aluno", value: "aluno" },
              { label: "Professor", value: "professor" },
              { label: "Nutricionista", value: "nutricionista" },
              { label: "Cozinheiro", value: "cozinheiro" },
              { label: "Pais", value: "pai" },
            ]} />
            <TextInput label='Senha' bordered fontSize={25} fixedLabel placeholder='Senha' />
            <TextInput label='Confirmar Senha' bordered fontSize={25} fixedLabel placeholder='Senha' />
            <Button onPress={() => {}} bordered filled>
              <Text size={20} bold>
                Seguinte
              </Text>
            </Button>
          </Content>
        </Content>
      </Screen>
    </>
  );
}
