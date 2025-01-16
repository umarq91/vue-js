export const useTest = () => {
  const sayHello = (name:string) => console.log(name);
  return {
    sayHello,
  };
};
