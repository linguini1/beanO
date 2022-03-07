import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Watermark from "./Watermark";
import CreateForm from "../components/forms/CreateForm";
import "./Create.css";

export default function Create() {
  return (
    <>
      <Watermark text={"create "} />
      <section className="create-page">
        <Navbar />
        <CreateForm />
      </section>
    </>
  );
}
