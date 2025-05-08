<!-- @format -->

# Blog one : What are some differences between interfaces and types in TypeScript?

## Ans : There are some differences between interfaces and types alias in TypScript.

### 1. Definition and Usage

\*_Types alias vs interface_ they both serve the object in TypeScript and difining the shape of ofject.

### But they have some diference (Syntex, use cases)

### Key Response:

- **Interface:** primarily used to discribe the stucture of an object

- **Types:** There are more use cases here all primitive (like number, string, boolean) values, union, intersection, tuple and object too.

### Syntax Differences

**using interface**

```TypeScript
interface User {
    name: string;
    age: number
}

const user : User = {
    name: 'Asadur Rahman',
    age: 26
}
```

**using Types**

```TypeScript
type User2 = {
    name: string;
    age: number
}

const user: user2 {
    name: 'Asadur Rahman',
    age: 32
}
```

## Extensibility

- Interfaces can be extended using the extends keyword, allowing for more structured inheritance. like OOP (object orientend programing)

- Types can use intersections to combine multiple types.

# Blog two:

## Provide an example of using union and intersection types in TypeScript.

### Union Example

```TypeScript
type MultipleType = 'string' | 'number' | 'boolean';
```

```TypeScript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    position: string;
};
type EmployeeDetails = Person & Employee;

```
