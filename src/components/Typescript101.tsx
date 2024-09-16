import React from "react";

// A clever way of using T or generic types in Typescript
// Here a transform function that takes a data and a function to transform the data
function transform<T>(data: T, transformFn: (item: T) => T): T {
  return transformFn(data);
}

type User = {
  name: string;
  age: number;
};

// Transformation function for User
const increaseAge = (user: User): User => ({
  ...user,
  age: user.age + 1,
});

const user: User = { name: "Alice", age: 30 };
const updatedUser = transform(user, increaseAge);
console.log(updatedUser); // Output: { name: "Alice", age: 31 }

/****************** Typescript on Props without Types *********************/

export function ThemeButton1({
  backgroundColor,
  fontSize,
  rounded,
  padding,
  onClick,
}: {
  backgroundColor: string;
  fontSize: number;
  rounded?: boolean;
  padding?: number[];
  paddingTuple?: [number, number, number, number]; //Set max items, type and order
  onClick: () => void;
}) {
  return (
    <button
      className="mamaloan"
      onClick={onClick}
      style={{
        padding: padding ? padding.join(" ") : "10px 20px",
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        borderRadius: rounded ? 24 : 0,
      }}
    >
      Click Me
    </button>
  );
}

/****************** Typescript with Types as Props plus advance parameter types *********************/

type MyComponentProps = {
  convertCurrency?: (amount: number, rate: number) => number;
  variant?: "primary" | "secondary";
  coordinates?: [number, number]; // Tuple
  style: React.CSSProperties; // CSS in JS
  children?: React.ReactNode; // Children e.g text, components between tags
} & React.ComponentPropsWithoutRef<"button">; // Button props without ref

export function ThemeButton2({ children, ...rest }: MyComponentProps) {
  return <button {...rest}>{children}</button>;
}

/****************** Typescript on input events *********************/

export function MyField() {
  function handleFieldOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    alert(e.target.value);
  }

  return (
    <div>
      <input onChange={handleFieldOnChange} type="text" />
    </div>
  );
}

/**** Omit example ******/
type AppUser = {
  name: string;
  age: number;
  email: string;
};

type UserWithoutEmail = Omit<AppUser, "email">;

// Using "as const" to make an array immutable and for fixed values intellisense support
const numbers = [1, 2, 3, 4, 5] as const;
numbers.map((num) => num);

/****************** TIPS AND TRICKS *********************/

// 1. Use existing type but remove some properties with Omit
// 2. useState< User | null>(null)

/****************** OUTPUT *********************/

function App() {
  return (
    <>
      <h1>Typescript</h1>
      <ThemeButton1
        onClick={() => alert("Hello")}
        backgroundColor="blue"
        fontSize={20}
        padding={[10, 20, 10, 20, 20, 40]}
        paddingTuple={[10, 20, 10, 20]}
      />

      <ThemeButton2
        className="mamaloan"
        autoFocus={true}
        onClick={() => alert("Hello")}
        style={{
          fontSize: 20,
        }}
      >
        Click ME THREE
      </ThemeButton2>
      <MyField />
    </>
  );
}

export default App;
