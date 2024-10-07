import React from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const App: React.FC = () => {

  // 35-masala

  const obj: { [key: string]: number } = { a: 2, b: 3, c: 4 };
  let n: number = 3;
  const res = Object.keys(obj).reduce<{ [key: string]: number }>((acc, key) => {
    acc[key] = obj[key] * n;
    return acc;
  }, {});
  console.log(res);




// 36-masala

  const Argum = (str:string):number => {
    const stre = str.trim().split(' ');
    let count = 0;
    for(const word of stre){
      for(const char of word){
        if(char >= '0' && char <= '9'){
          count++
         
        }
      }
    }
    return count;
  }
console.log(  Argum("Hello54"));

  



// 37-masala
const sumArray = (...numbers:number[]):number[] => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum.toString().split('').map(Number);
}
const result = sumArray(1,22,3)
console.log(result);




// 38-masala
  const countstring = (input : string):number => {
    const word = input.split(' ');
    const StringWord = word.filter(word => word.includes('a') || word.includes('A'));
    return StringWord.length;
  }

  const suz = " yaxshi ball quying"
  const result1 = countstring(suz)
  console.log(result1);
  




// 39-masala

const findPowerOfTwo = (n: number): number | null => {
  if (n <= 0 || (n & (n - 1)) !== 0) {
    return null; 
  }
  let k = 0;
  while (n > 1) {
    n = n / 2;
    k++;
  }
  return k;
}
const input = 8;
const k = findPowerOfTwo(input);
if (k !== null) {
  console.log(`k = ${k}`); 
} else {
  console.log("no");
}






// 40-masala

const findMiddleNumber = (arr: number[]): number => {
  const len = arr.length;
  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  }
  const mid1 = arr[len / 2 - 1];
  const mid2 = arr[len / 2];
  return (mid1 + mid2) / 2;
};
const arr1 = [1, 2, 3, 4, 5];   
const middle1 = findMiddleNumber(arr1);  
console.log(`Middle number: ${middle1}`);

const arr2 = [1, 2, 3, 4];   
const middle2 = findMiddleNumber(arr2);  
console.log(`Middle number: ${middle2}`);








// 41-masala
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true
  },
];

books.forEach((book, index) => {
  const status = book.read ? "o’qilgan" : "o’qilmagan";
  const authorTitle = `${book.author} ning ${book.title} kitobi`;
  console.log(`${index + 1}. ${authorTitle} ${status}`);
});








// 42-masala

const stringsArray = ['text', 'world', 'laptop'];
const createObjectFromArray = (arr: string[]): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  arr.forEach(item => {
    result[item] = item.length;
  });
  return result;

};

const outputObject = createObjectFromArray(stringsArray);








// 43-masala

const multiplyValues = (obj1: { [key: string]: number }, n1: number): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  for (const key in obj1) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key] * n1; // Qiymatlarni n marta ko'paytirish
    }
  }
  return result;
};


const n1 = 3;
const obj1 = { a: 2, b: 3, c: 4 };

const resu = multiplyValues(obj1, n1);


console.log(resu); // Output: { a: 6, b: 9, c: 12 }




// 44-masala

const getLevel = (n: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(2 ** i); 
  }
  return result;
};
const n11 = 4;
const result11 = getLevel(n11);
console.log(`n = ${n1}:`, result11); // Output: [2, 4, 8, 16]

const n2 = 5;
const result2 = getLevel(n2);
console.log(`n = ${n2}:`, result2); // Output: [2, 4, 8, 16, 32]






// 45-masala
const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const countWords = (arr: string[]): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  
  arr.forEach(word => {
    result[word] = (result[word] || 0) + 1; 
  });
  
  return result;
};

const animalCount = countWords(animals); // { dog: 2, chicken: 3, cat: 1, rabbit: 1 }




// 46-masala

const numbers = [1, 2, 3, 4, 5];
const squareElements = (arr: number[]): number[] => {
  return arr.map(num => num ** 2); 
};
const squaredArray = squareElements(numbers); // [1, 4, 9, 16, 25]




// 47-masala
const numbers2 = [1, -4, 12, 0, -3, 29, -150];
const sumOfPositiveNumbers = (arr: number[]): number => {
  return arr
    .filter(num => num > 0) 
    .reduce((acc, num) => acc + num, 0); 
};

const result3 = sumOfPositiveNumbers(numbers2); // 42




// 48-masala

const inputString = 'George Raymond Richard Martin';


const getInitials = (str: string): string => {
  return str
    .split(' ') 
    .map(word => word.charAt(0)) 
    .join(''); 
};

const result5 = getInitials(inputString); 



// 49-masala


const people = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const ageDifference = (arr: { name: string; age: number }[]): number => {
  const sortedArr = arr.sort((a, b) => a.age - b.age); 
  const youngest = sortedArr[0].age; 
  const oldest = sortedArr[sortedArr.length - 1].age; 
  return oldest - youngest; 
};


const result6 = ageDifference(people); // 54








// 50-masala
const findUniqueNumbers = (array: (number | boolean)[]): number[] => {
  const countMap: { [key: string]: number } = {}; 

  array.forEach(item => {
    countMap[item.toString()] = (countMap[item.toString()] || 0) + 1; 
  });
  const uniqueNumbers = Object.keys(countMap)
    .filter(key => countMap[key] === 1)
    .map(Number);

  return uniqueNumbers;
};

const numbersArray: (number | boolean)[] = [4, 1, 2, 1, 2, 9, true];

const uniqueResult: number[] = findUniqueNumbers(numbersArray); // [4, 9]

console.log(uniqueResult);



  const codeString = `
    const obj: { [key: string]: number } = { a: 2, b: 3, c: 4 };
    let n: number = 3;
    const res = Object.keys(obj).reduce<{ [key: string]: number }>((acc, key) => {
      acc[key] = obj[key] * n;
      return acc;
    }, {});

    console.log(res);
  `;


  const str = `const Argum = (str:string):number => {
    const stre = str.trim().split(' ');
    return stre.filter(word => word.length > 0 ).length
  }
console.log(  Argum("hello123"));
`

const codeArray = `const sumArray = (...numbers:number[]):number[] => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum.toString().split('').map(Number);
}
const result = sumArray(1,22,3)
console.log(result);`

const stringcount= `
const countstring = (input : string):number => {
    const word = input.split(' ');
    const StringWord = word.filter(word => word.includes('a') || word.includes('A'));
    return StringWord.length;
  }

  const suz = " yaxshi ball quying"
  const result1 = countstring(suz)
  console.log(result1);
`


const findN = `
const findPowerOfTwo = (n: number): number | null => {
  if (n <= 0 || (n & (n - 1)) !== 0) {
    return null; 
  }
  let k = 0;
  while (n > 1) {
    n = n / 2;
    k++;
  }
  return k;
}
const input = 8;
const k = findPowerOfTwo(input);
if (k !== null) {
  console.log(\`k = \${k}\`); 
} else {
  console.log("no");
}
`;


const findmidle = `
const findMiddleNumber = (arr: number[]): number => {
  const len = arr.length;
  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  }
  const mid1 = arr[len / 2 - 1];
  const mid2 = arr[len / 2];
  return (mid1 + mid2) / 2;
};
const arr1 = [1, 2, 3, 4, 5];   
const middle1 = findMiddleNumber(arr1);  
console.log(\`Middle number: \${middle1}\`);

const arr2 = [1, 2, 3, 4];   
const middle2 = findMiddleNumber(arr2);  
console.log(\`Middle number: \${middle2}\`);
`





const booksCode = `
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true
  },
];

books.forEach((book, index) => {
  const status = book.read ? "o’qilgan" : "o’qilmagan";
  const authorTitle = \`\${book.author} ning \${book.title} kitobi\`;
  console.log(\`\${index + 1}. \${authorTitle} \${status}\`);
});
`;

const codeSnippet = `
const stringsArray = ['text', 'world', 'laptop'];

const createObjectFromArray = (arr: string[]): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  arr.forEach(item => {
    result[item] = item.length;
  });
  return result;
};

const outputObject = createObjectFromArray(stringsArray);
console.log(outputObject); // Natija: { text: 4, world: 5, laptop: 6 }
`;


const codeSnippet2= `
const multiplyValues = (obj: { [key: string]: number }, n: number): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key] * n; 
    }
  }
  return result;
};

const obj = { a: 2, b: 3, c: 4 };
const n = 3;
const res = multiplyValues(obj, n);
console.log(res); // Output: { a: 6, b: 9, c: 12 }
`;

const GetLevel = `
const getLevel = (n: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(2 ** i); // 
  }
  return result;
};

const n1 = 4;
const result1 = getLevel(n1);
console.log(\`n = \${n1}:\`, result1); 

const n2 = 5;
const result2 = getLevel(n2);
console.log(\`n = \${n2}:\`, result2); // Output: [2, 4, 8, 16, 32]
`



const codeSnippet3 = `
const countWords = (arr: string[]): { [key: string]: number } => {
  const result: { [key: string]: number } = {};
  
  arr.forEach(word => {
    result[word] = (result[word] || 0) + 1; 
  });
  
  return result;
};

const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const animalCount = countWords(animals);
console.log(animalCount); // Output: { dog: 2, chicken: 3, cat: 1, rabbit: 1 }
`;


const codeSnippet4 = `
const squareElements = (arr: number[]): number[] => {
  return arr.map(num => num ** 2); 
};

const numbers = [1, 2, 3, 4, 5];
const squaredArray = squareElements(numbers);
console.log(squaredArray); // Output: [1, 4, 9, 16, 25]
`;


const codeSnippet5 = `
const sumOfPositiveNumbers = (arr: number[]): number => {
  return arr
    .filter(num => num > 0) // Musbat sonlarni filtrlaymiz
    .reduce((acc, num) => acc + num, 0); // Yig'indisini hisoblaymiz
};

const numbers = [1, -4, 12, 0, -3, 29, -150];
const result = sumOfPositiveNumbers(numbers);
console.log(result); // Output: 42
`;


const codeSnippet6 = `
const getInitials = (str: string): string => {
  return str
    .split(' ') 
    .map(word => word.charAt(0)) 
    .join(''); 
};

const inputString = 'George Raymond Richard Martin';
const result = getInitials(inputString);
console.log(result); // Output: 'GRRM'
`;

const codeSnippet7= `
const ageDifference = (arr: { name: string; age: number }[]): number => {
  const sortedArr = arr.sort((a, b) => a.age - b.age); 
  const youngest = sortedArr[0].age; 
  const oldest = sortedArr[sortedArr.length - 1].age; 
  return oldest - youngest; 
};

const people = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const result = ageDifference(people);
console.log(result); // Output: 54
`;

const elli = `
const findUniqueNumbers = (array: (number | boolean)[]): number[] => {
  const countMap: { [key: string]: number } = {};

  array.forEach(item => {
    countMap[item.toString()] = (countMap[item.toString()] || 0) + 1;
  });

  const uniqueNumbers = Object.keys(countMap)
    .filter(key => countMap[key] === 1)
    .map(Number);

  return uniqueNumbers;
};

const numbersArray: (number | boolean)[] = [4, 1, 2, 1, 2, 9, true];
const uniqueResult: number[] = findUniqueNumbers(numbersArray); // [4, 9]
`;
  return (
    <div className='flex flex-col gap-3'>
      <div className="flex flex-col items-center ">
        <h1  className='text-[black] text-[29px]'>35-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeString}
        </SyntaxHighlighter>
        <h2 className='text-[black] text-[29px]'>Natija: {JSON.stringify(res)}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>36-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {str}
        </SyntaxHighlighter>
        <h2 className='text-[black] text-[29px]'>Natija: {JSON.stringify(Argum("hello123"))}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>37-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeArray}
        </SyntaxHighlighter>
        <h2 className='text-[black] text-[29px]'>Natija: {JSON.stringify(sumArray(1,22,3))}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>38-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {stringcount}
        </SyntaxHighlighter>
        <h2 className='text-[black] text-[29px]'>Natija: {JSON.stringify(countstring("yaxshi ball quying"))}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>39-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {findN}
        </SyntaxHighlighter>
        <h2 className='text-[black] text-[29px]'>Natija: {JSON.stringify(findPowerOfTwo(8))}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>40-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {findmidle}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Middle number for [1, 2, 3, 4, 5]: {middle1}</h2>
        <h2 className="text-[black] text-[29px]">Middle number for [1, 2, 3, 4]: {middle2}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>41-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {booksCode}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natijalarni brauzer konsole ko'rishingiz mumkin.</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>42-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {JSON.stringify(outputObject)}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>43-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet2}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {JSON.stringify(res)}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>44-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {GetLevel}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {JSON.stringify(result1)} va {JSON.stringify(result2)}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>45-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet3}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {JSON.stringify(animalCount)}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>46-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet4}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {JSON.stringify(squaredArray)}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>47-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet5}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {result3}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>48-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet6}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {result5}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>49-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {codeSnippet7}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {result6}</h2>
      </div>
      <div className="flex flex-col items-center">
        <h1  className='text-[black] text-[29px]'>50-masala</h1>
        <SyntaxHighlighter language="typescript" style={dark}>
          {elli}
        </SyntaxHighlighter>
        <h2 className="text-[black] text-[29px]">Natija: {JSON.stringify(uniqueResult)}</h2>
      </div>
    </div>
  );
}

export default App;
