import { Screen } from "@/components/Screen";
import Button from "@/components/Button";
import { router } from 'expo-router';
import { BottomContent, Content, Logo, Title } from "./styles";
import Text from "@/components/Text";
import Header from "@/components/Header";

export default function Index() {

  return (
    <Screen>
      <Header title="NutriKids" >
        <></>
        <Button onPress={() => {}} iconProps={{ name: "help-circle-outline", size: 50 }} circular />
      </Header>
      <Content>
        <Logo />
        <BottomContent>
        <Button onPress={() => router.push('/login')} bordered filled>
          <Text size={20} bold>Entrar</Text>
        </Button>
        <Button bordered filled secondary onPress={() => router.push('/cadastro')}>
          <Text size={20} bold>Cadastrar</Text>
        </Button>
        </BottomContent>
      </Content>
    </Screen>
  );
}
