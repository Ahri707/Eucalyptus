import { Screen } from "@/components/Screen";
import { Content, HeaderContent } from "./styles";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { RepoList } from "@/components/RepoList";

export default function Repos() {

  const params = useLocalSearchParams();


  return (
    <Screen noScroll>
      <HeaderContent>
        <Button onPress={router.back} iconProps={{ name: 'chevron-back-sharp', size: 40 }} />
        <Text size={40} bold>Repositórios</Text>
      </HeaderContent>
      <Content>
        <RepoList repos={repos} />
      </Content>
    </Screen>
  );
}
