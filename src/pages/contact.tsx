import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Modal } from "@heroui/react";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_y5j0wbj', 'template_q1hdzz9', form.current, {
          publicKey: 'JyD-tguykLBx5RD-s',
        })
        .then(
          () => {
            setEmailSent(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );

      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-start gap-6 pt-6 pb-12 min-h-screen">
        <div className="inline-block w-full text-center px-4">
          <h1 className={title()}>Contact Me</h1>
        </div>

        <Form
          ref={form}
          onSubmit={sendEmail}
          validationBehavior="aria"
          className="flex flex-col gap-6 w-full max-w-xl px-4 sm:px-6 md:px-8 py-6 rounded-lg shadow-lg items-center "
        >
          <Input
            isRequired
            name="user_email"
            labelPlacement="outside"
            placeholder="Your Email"
            description="Your email will not be shared."
            label="Email"
            type="email"
            pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
            errorMessage="Please enter a valid email address"
            className="w-full"
          />
          <Input
            isRequired
            name="user_name"
            labelPlacement="outside"
            placeholder="Your name"
            label="Name"
            className="w-full"
          />
          <Textarea
            isRequired
            name="message"
            labelPlacement="outside"
            placeholder="Your message"
            label="Message"
            isClearable
            className="w-full"
          />
          <div className="flex justify-center w-full">
            <Button type="submit" className="w-24 text-sm py-2 px-4">
              Submit
            </Button>
          </div>
        </Form>

        <Modal isOpen={emailSent} onOpenChange={setEmailSent}>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
            <div className="rounded-lg p-6 shadow-lg text-center bg-amber-50 text-black dark:bg-zinc-900 dark:text-white w-full max-w-sm">
              <h2 className="text-xl font-semibold mb-2">Email Sent!</h2>
              <p>Your message has been sent successfully.</p>
              <Button className="mt-4" onClick={() => setEmailSent(false)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </section>
    </DefaultLayout>
  );
}
