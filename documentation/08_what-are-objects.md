Objects & Primitive Values
Objects are reference values - you learned that.

It might not have been obvious yet but it's also important to recognize that, in the end, objects are of course made up of primitive values.

Here's an example:

const complexPerson = {
    name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: 'Some Street 5',
        stateId: 5,
        country: 'Germany',
        phone: {
            number: 12 345 678 9,
            isMobile: true
        }
    },
};
Event though complexPerson has multiple nested reference values (nested arrays and objects), you end up with primitive values if you drill into the object.

name holds a string ('Max') => Primitive value

hobbies holds an array (i.e. a reference value) which is full of strings ('Sports', 'Cooking') => Primitive values

address holds an object which in turn holds a mixture of primitive values like 'Some Street 5' and nested objects (phone), but if you dive into phone, you find only numbers and booleans in there => Primitive values

So you could say: Primitive values are the core building blocks that hold your data, objects (and arrays) are helpful for organizing and working with that data.