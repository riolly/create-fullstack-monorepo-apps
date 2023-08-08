import { Button, SafeAreaView, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import { api } from "~/utils/api";

const Post: React.FC = () => {
  const { id } = useLocalSearchParams();
  const { push } = useRouter();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  const { data } = api.post.byId.useQuery({ id });

  if (!data) return <SplashScreen />;

  return (
    <SafeAreaView className="bg-[#1F104A]">
      <Stack.Screen options={{ title: data.title }} />
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-white">{data.title}</Text>
        <Text className="py-4 text-white">{data.content}</Text>
        <Button onPress={() => push("/")} title="Back" />
      </View>
    </SafeAreaView>
  );
};

export default Post;
