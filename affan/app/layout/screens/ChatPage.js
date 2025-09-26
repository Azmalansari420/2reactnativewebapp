import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "../../assets/css/myAppStyle";
import Header from "../components/HeaderWithSidebar";

const chatData = [
  {
    id: 1,
    name: "Azmal Ansari",
    lastMessage: "Hey, are we meeting today?",
    time: "3:40 PM",
    unread: 2,
  },
  {
    id: 2,
    name: "Archana Mawar",
    lastMessage: "I have sent the report.",
    time: "2:15 PM",
    unread: 0,
  },
  {
    id: 3,
    name: "Md Arwaz",
    lastMessage: "Ok, see you tomorrow!",
    time: "1:05 PM",
    unread: 1,
  },
];

const ChatPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <Header title="Chats" />

      <ScrollView style={{ flex: 1, padding: 15 }}>
        {chatData.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatCard}>
            <View style={styles.chatHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {chat.name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.profileName}>{chat.name}</Text>
                <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.chatTime}>{chat.time}</Text>
                {chat.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{chat.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatPage;
