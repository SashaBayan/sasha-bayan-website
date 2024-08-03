import { sayHello } from "@/app/hello/utils";

describe("SayHello", () => {
  it('renders the "hello world" text', () => {
    expect(sayHello()).toEqual("Hello World!");
  });
});
