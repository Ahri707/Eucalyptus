import { Screen } from "@/components/Screen";
import Button from "@/components/Button";
import { router } from "expo-router";
import { Content } from "./styles";
import Text from "@/components/Text";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";

export default function Login() {
  return (
    <Screen noScroll>
      <Header title='Login'>
        <Button onPress={() => router.back()} iconProps={{ name: "chevron-back", size: 40 }} circular />
        <Button onPress={() => {}} iconProps={{ name: "help-circle-outline", size: 50 }} circular />
      </Header>
      <Content height={"100px"} align="center">
        <Icon name='person-circle-sharp' size={100} />
      </Content>
      <Content>
        <Content bordered height={"60%"}>
          <TextInput label="Email" bordered fontSize={25} fixedLabel placeholder="Email"/>
          <TextInput label="Senha" bordered fontSize={25} fixedLabel placeholder="Senha"/>
          <Button onPress={() => router.push("/home")} bordered filled>
            <Text size={20} bold>
              Entrar
            </Text>
          </Button>
          <Button quiet onPress={() => {}}>
            <Text size={20} underline>
              Esqueceu a senha?
            </Text>
          </Button>
        </Content>
      </Content>
    </Screen>
  );
}
