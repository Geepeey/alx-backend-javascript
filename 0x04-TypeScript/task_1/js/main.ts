interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Remedy',
  lastName: 'Wealth',
  fullTimeEmployee: false,
  location: 'Lagos',
  contract: false,
};

console.log(teacher3);
