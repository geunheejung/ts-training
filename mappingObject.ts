type AnimalType = {
  name: string;
  age: number;
  breed: string;
};

type CatType = {
  [k in keyof AnimalType]: AnimalType[k];
};

type CatType2 = Pick<AnimalType, "age" | "breed">;

type CatType3 = Omit<AnimalType, "breed">;

// AnimalType의 key를 union 형식으로 추출해낸다.
type AnimalTypeKeys = keyof AnimalType;

type CatType4 = {
  [k in "name" | "age"]?: string;
};

type CatType5 = {
  [k in Exclude<AnimalTypeKeys, "breed">]: AnimalType[k];
};

type NameType = AnimalType["name"];
