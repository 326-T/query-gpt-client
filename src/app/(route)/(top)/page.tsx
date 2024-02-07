"use client";

import { useMemo, useState } from "react";
import TextForm from "./components/TextForm";
import ChatBox from "./components/ChatBox";
import axios from "axios";
import JsonTable from "./components/JsonTable";
import { Chat } from "@/types/chat";

export default function SignInPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [response, setResponse] = useState<Array<any>>([]);

  const callApi = async (value: string) => {
    axios
      .post("/api/v1/sql", { value })
      .then((res) => {
        if (Array.isArray(res.data)) setResponse(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-full">
      <div className="w-2/3 p-10">
        <JsonTable data={response} />
      </div>
      <div className="flex w-1/3 h-screen">
        <div className="divider divider-horizontal m-0 p-0" />
        <div className="block w-full p-5">
          <TextForm
            onSubmit={(value: string) => {
              callApi(value);
              setChats((prev: Chat[]) => [
                { message: value, createdAt: new Date() },
                ...prev,
              ]);
            }}
          />
          <ChatBox chats={chats} />
        </div>
      </div>
    </div>
  );
}
