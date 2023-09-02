import {
  CounterContainer,
  CounterPreview,
  FormContainer,
  FormPreview,
} from "@/components";
import React from "react";

export default function Home() {
  return (
    <div>
      <FormContainer />
      <FormPreview />
      <CounterContainer />
      <CounterPreview />
    </div>
  );
}
