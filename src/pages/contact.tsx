import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-20 min-h-[80vh]">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact Me</h1>
        </div>
        <Form
          validationBehavior="aria"
          className="flex flex-col gap-6 w-full max-w-2xl p-8 rounded-lg shadow-lg items-center justify-center"
        >
          <Input
            isRequired
            name="email"
            labelPlacement="outside"
            placeholder="Your Email"
            description="Your Email will not be shared with anyone."
            label="Email"
            type="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            errorMessage="Please enter a valid email address"
            className="w-full max-w-md"
          />
          <Input
            isRequired
            name="name"
            labelPlacement="outside"
            placeholder="Please enter your name"
            label="Name"
            className="w-full max-w-md"
          />
          <Textarea
            isRequired
            name="message"
            labelPlacement="outside"
            placeholder="Please enter your message for me."
            label="Message"
            isClearable
            className="w-full max-w-md"
          />
          <div className="flex justify-center w-full">
            <Button type="submit" className="w-24 flex justify-center items-center text-sm py-2 px-4">
              Submit
            </Button>
          </div>
        </Form>
      </section>
    </DefaultLayout>
  );
}
