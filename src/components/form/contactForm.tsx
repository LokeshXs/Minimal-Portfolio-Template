"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(4, { message: "Please enter full name" }),
  email: z.email({ message: "Invalid Email" }),
  message: z.string().min(10, { message: "Message is too short!" }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {

    toast.success("Message sent successfully!")
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-sm:space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal max-sm:text-sm">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tyler James"
                  {...field}
                  className="border-2 border-muted-foreground/20 shadow-sm hover:border-muted-foreground/60 focus-visible:border-primary-foreground focus-visible:ring-transparent max-sm:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal max-sm:text-sm">Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="tylerjames@yahoo.com"
                  {...field}
                 className="border-2 border-muted-foreground/20 shadow-sm hover:border-muted-foreground/60 focus-visible:border-primary-foreground focus-visible:ring-transparent max-sm:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal max-sm:text-sm">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hi I want to hire you for a project..."
                  {...field}
                  className="border-2 border-muted-foreground/20 shadow-sm hover:border-muted-foreground/60 focus-visible:border-primary-foreground focus-visible:ring-transparent max-sm:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex -translate-y-2 justify-center">
          <Button className="w-full font-normal cursor-pointer max-sm:text-sm" variant="secondary">Send Message</Button>
        </div>
      </form>
    </Form>
  );
}
