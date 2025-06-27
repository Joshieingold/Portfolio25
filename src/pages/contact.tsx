import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Form} from "@heroui/form";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
export default function ContactPage() {
    
    return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact Me</h1>
        </div>
        <Form validationBehavior="aria">
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
            />
            <Input
                isRequired
                name="name"
                labelPlacement="outside"
                placeholder="Please enter your name"
                label="Name"
                
            />
            <Textarea
                isRequired
                name="message"
                labelPlacement="outside"
                placeholder="Please enter your message for me."
                label="Message"
                isClearable
            />
            <Button type="submit">Submit</Button>
            
        </Form>
      </section>
    </DefaultLayout>
  );
}
