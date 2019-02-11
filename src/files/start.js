import { has } from 'lodash';

// BEGIN (write your solution here)
const makeArr = (before,after)=> {
  const total =  Object.assign({},before,after);
  console.log(total);
  const keys = Object.keys(before);
  //имеем массив со всеми ключами.
  //берем ключ. если он есть и там и там- сравниваем значение:одинаковое-оставляем это значение,нет-делаем +-
  //если ключ есть только в первом,то делаем -ключ:значение
  //если ключ есть только во втором,то делаем ключ
  //последние 2 варианта можно тупо без else через тренарный оператор.
  const func = (acc,item) => {
      const first = before[item];
      const second = after[item];
    if (has(before,item) && has(after,item)) {
      return (before[item] === after[item])? [...acc,`    ${item}: ${first}`]: [...acc,`  + ${item}: ${second}`,`  - ${item}: ${first}`];
    } 
    else if (has(before,item)) return [...acc,`  - ${item}: ${first}`];
    return [...acc,`  + ${item}: ${second}`];
  }
  return keys.reduce(func,[]);
}

const makeStr = (arr) => {
  //const str = arr.reduce((acc,item) => acc+item,'');
  const str = arr.join('\n') ;
  return '{\n'+str+'\n}';
}

export default (before,after) => {
  const arr = makeArr(before,after);
  const str = makeStr(arr);
  return str;

}
