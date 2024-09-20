"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, SendHorizontal } from "lucide-react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";


export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    msg: string;
  }>({
    name: "",
    email: "",
    msg: "",
  });

  const { toast } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      console.log(res.status);
      if (res.status === 200) {
        toast({
          description: "Message sent successfully!",
        });
        setForm({ email: "", msg: "", name: "" });
      }
    } catch (error) {
      console.log(error);
      toast({ variant: "destructive", description: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-6 mt-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
            required={true}
            className="focus:border-green-500 bg-[#001100] rounded-none focus-visible:ring-0"
            value={form.name}
          />
        </div>
        <div className="space-y-1.5">
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required={true}
            className="focus:border-green-500 bg-[#001100] rounded-none focus-visible:ring-0"
            value={form.email}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Textarea
          id="message"
          name="msg"
          rows={5}
          placeholder="Your message"
          onChange={handleChange}
          required={true}
          className="focus:border-green-500 bg-[#001100] rounded-none focus-visible:ring-0 resize-none"
          value={form.msg}
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center items-center gap-1 transition rounded-none"
      >
        {loading ? (
          <>
            Sending <LoaderCircle className="animate-spin" size={14} />
          </>
        ) : (
          <>
            Send Message <SendHorizontal size={14} />
          </>
        )}
      </Button>
    </form>
  );
}