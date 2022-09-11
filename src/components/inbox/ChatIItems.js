import moment from "moment";
import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import Error from "../ui/Error";
import ChatItem from "./ChatItem";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth) || {};
  const { email } = user || {};
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email);

  // decide what to render

  let content = null;
  if (isLoading) {
    content = <li className="m-3 text-center"></li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-3 text-center">
        <Error message={error?.data} />
      </li>
    );
  } else if (!isLoading && !isError && conversations?.length === 0) {
    content = <li className="m-3 text-center">No Conversation Found</li>;
  } else if (!isLoading && !isError && conversations?.length > 0) {
    content = conversations.map((conversation) => {
      const { message, id, timestamp } = conversation;
      return (
        <li key={id}>
          <ChatItem
            avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
            name="Saad Hasan"
            lastMessage={message}
            lastTime={moment(timestamp).fromNow()}
          />
        </li>
      );
    });
  }
  return <ul>{content}</ul>;
}
