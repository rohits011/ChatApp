import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Chats from "./Chats";

export default function Tasks() {
    const tasks = useQuery(api.chats.get);

    return (
        <View style={styles.container}>
            {tasks?.map(({ _id, username }) => (
                <Text key={_id}>{username}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});