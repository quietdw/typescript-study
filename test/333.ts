{
  enum Gender {
    Male,
    Female
  }

  interface Person {
    gender: Gender;
  }

  function xxx(a: Person, b: Person): [Person, Person] {
    if (a.gender !== b.gender) {
      return [a, b];
    } else {
      throw new Error("xxx");
    }
  }

  let a = { gender: Gender.Male };
  let b = { gender: Gender.Female };

  console.log(xxx(a, b));
}
