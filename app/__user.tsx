import { Screen } from "@/components/Screen";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { BackButton, BottomContent, Column, Row, Separator, UserBio, UserFollows, UserFollowsTitle, UserImage, UserName } from "./styles";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function User() {
  const params = useLocalSearchParams();

  const gotoRepos = () => {
    router.push({ pathname: '/repos', params: { search: params.search } });
  }


  return (
    <Screen>
      <BackButton />
      <UserImage source={{ uri: userData?.avatar_url || '' }} />
      <UserName size={30}>{userData?.name || ''}</UserName>
      <UserBio size={20}>{userData?.email || userData?.html_url || ''}</UserBio>
      <UserBio size={20}>{userData?.bio || ''}</UserBio>
      <BottomContent>
        <Row>
          <Column>
            <UserFollowsTitle>Seguidores</UserFollowsTitle>
            <UserFollows bold>{userData?.followers || '0'}</UserFollows>
          </Column>
          <Separator />
          <Column>
            <UserFollowsTitle>Seguindo</UserFollowsTitle>
            <UserFollows bold>{userData?.following || '0'}</UserFollows>
          </Column>
        </Row>
        <Button onPress={gotoRepos} filled bordered>
          <Text size={20}>Repositórios</Text>
        </Button>
      </BottomContent>
    </Screen>
  );
}
