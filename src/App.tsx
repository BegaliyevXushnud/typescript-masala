import React from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const App: React.FC = () => {
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

  


// 36-masala


const sumArray = (...numbers:number[]):number[] => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum.toString().split('').map(Number);
}
const result = sumArray(1,22,3)
console.log(result);

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
          {codeArray}
        </SyntaxHighlighter>
        <h2 className='text-[black] text-[29px]'>Natija: {JSON.stringify(sumArray(1,22,3))}</h2>
      </div>
    </div>
  );
}

export default App;
