"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber="+905368192660"
      accountName="محمد"
      statusMessage="متصل"
      chatMessage="مرحبًا 👋
يسرّنا مشاركتك نماذج من مشاريعنا في برمجة وتصميم مواقع ويب احترافية ✨
نستخدم أحدث التقنيات مع ضمان سرعة الأداء والتوافق على جميع الأجهزة."
      avatar="/photo/favicon.ico"
      chatboxHeight={380}
      chatboxClassName="!max-w-[calc(100%-10px)]"
    />
  );
}
