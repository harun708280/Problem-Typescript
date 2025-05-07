# What is the use of the keyof keyword in TypeScript? Provide an example.
In Typescript keyof is a cool thing. It helps us to get the keys of a object. Like if we have one object and we want to know what propertys it have then we can use keyof.
It is helpful when we make a function that take a object key as a input. If we use keyof then Typescript will show error if we give wrong key. This make our code more safe and less bugs.


# What is type inference in TypeScript? Why is it helpful?
Type inference is a nice feature in Typescript. It means when we assign a value to a variable Typescript can understand what type it is. So we dont need to always write the type.
This is helpful for begginer because sometimes we forget to write types but Typescript still help us by guessing the type.But it doesnt mean we should always skip the type. In some complex case better to write the type manually.Using type inference makes our code more clean and easy to read.