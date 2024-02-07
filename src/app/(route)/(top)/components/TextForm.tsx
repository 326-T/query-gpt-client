"use client";

import TextArea from "@/components/TextArea";
import { useState } from "react";

export default function TextForm({
  onSubmit,
}: {
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex space-x-2">
      <div className="block w-5/6">
        <TextArea value={value} setValue={setValue} />
      </div>
      <div className="block w-1/6">
        <button
          onClick={() => {
            onSubmit(value);
            setValue("");
          }}
          className="btn rounded-lg"
        >
          <p className="body-medium">Send</p>
        </button>
      </div>
    </div>
  );
}
