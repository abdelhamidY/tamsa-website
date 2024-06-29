"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define an interface for your form data
interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  const inputClass = "border ps-5 border-[#DFDFE3] min-h-14 rounded-xl";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <input
        type="text"
        className={inputClass}
        placeholder="الإسم"
        {...register("name")}
      />
      <input
        type="email"
        className={inputClass}
        placeholder="البريد الالكتروني"
        {...register("email")}
      />
      <input
        type="text"
        className={inputClass}
        placeholder="رقم التواصل"
        {...register("phone")}
      />
      <textarea
        placeholder="رسالتك"
        className={`${inputClass} pt-5`}
        rows={8}
        {...register("message")}
      />
      <button
        className="bg-[#D57153] hover:bg-[#a35740] duration-300 ease-out rounded-3xl min-h-12 text-white"
        type="submit"
      >
        إرسال
      </button>
    </form>
  );
};

export default ContactForm;
