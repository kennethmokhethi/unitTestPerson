describe("The person class", () => {
  it("Should return the person details such as name,age,gender and interest", () => {
    //    Instantiating the object
    let person = new Person("Mike", 20, "male", [
      "reading",
      "soccer",
      "hockey"
    ]);
    // calling the hello function and storing its retunr data on greeting variable.
    let greeting = person.hello();
    expect(greeting).toBe(
      "Hello my name is Mike and I am 20 years old.My interest are reading,soccer and hockey."
    );
  });
});

describe("Another person", () => {
  it("Should return the person details such as name,age,gender and interest", () => {
    let person2 = new Person("Wendy", 24, "females", [
      "netball",
      "jogging",
      "drawing"
    ]);

    let greeting2 = person2.hello();
    expect(greeting2).toBe(
      "Hello my name is Wendy and I am 24 years old.My interest are netball,jogging and drawing."
    );
  });
});
