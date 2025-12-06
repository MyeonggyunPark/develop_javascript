function ticketPrice(standard, student) { 
  let standardPrice = 15000;
  let studentPrrice = 8000;

  let totalPrice = standardPrice * standard + studentPrrice * student;
  let result = `총금액: ${totalPrice}원 / 일반인: ${standard}명, 학생: ${student}명`;
  return result;
}

console.log(ticketPrice(3, 2));
console.log(ticketPrice(5, 3));

console.log("==================================================");

function checkHeight(height) {
  if (height >= 140) {
    console.log("탑승이 가능합니다.");
  } else { 
    console.log("탑승이 불가능합니다.");
  }
}

checkHeight(141);

console.log("==================================================");

function printGrade(midtermScore, finalScore) { 
  const totalScore = midtermScore + finalScore
  
  if (totalScore >= 90) {
    console.log("A");
  } else if (totalScore >= 80) {
    console.log("B");
  } else if (totalScore >= 70) {
    console.log("C");
  } else if (totalScore >= 60) {
    console.log("D");
  } else { 
    console.log("F");
  }
}

printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);


console.log("==================================================");

function printOdd(number) { 
  for (let i = 1; i <= number; i+=2) { 
    console.log(i);
  }
}

function printEven(number) { 
  let i = 0;
  while (i <= number) { 
    console.log(i);
    i += 2;
  }
}

printOdd(10);
printOdd(23);
printEven(31);
printEven(18);

console.log("==================================================");

function printTriangle(height) { 
  for (let i = 1; i <= height; i++) { 
    console.log("*".repeat(i))
  }
}

console.log("높이: 1");
printTriangle(1);

console.log("높이: 3");
printTriangle(3);

console.log("높이: 5");
printTriangle(5);

console.log("==================================================");

function printDivisor(number) {
  let totalDiv = 0;
  for (let i = 1; i <= number; i++) { 
    if (number % i === 0) { 
      console.log(i);
      totalDiv += 1;
    }
  }
  console.log(`${number}의 약수는 총 ${totalDiv}개입니다.`);
}

printDivisor(180);

console.log("==================================================");

let dataTypes = ["number", "string", "boolean", "null", "undefined", "array"];

console.log(dataTypes[1]);

console.log(dataTypes[dataTypes.length - 1]);

console.log(dataTypes.slice(0, 5));

for (let i = 0; i <= dataTypes.length - 1; i++) { 
  console.log(dataTypes[i]);
}

dataTypes = ["number", "string", "false", "true", "null", "undefined"];

dataTypes.push("array", "object");
console.log(dataTypes);

dataTypes.pop();
console.log(dataTypes);

dataTypes.splice(2, 2);
console.log(dataTypes);

dataTypes.splice(2, 0, "boolean");
console.log(dataTypes);

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// F = (C * 9 / 5) + 32 (F: 화씨온도, C: 섭씨온도)

for (let i = 0; i < celsiusTemps.length; i++) { 
  let f = (celsiusTemps[i] * 9 / 5) + 32;
  fahrenheitTemps.push(f);
}

console.log(fahrenheitTemps);

console.log("==================================================");

let codethat = {
  name: "코드댓",
  bornYear: 2022,
  founder: {
    name: "김민준",
    age: 28,
  },
  languages: ["C++", "Java", "JavaScript", "Python"],
};

console.log(codethat.name);

console.log(codethat["founder"]["name"]);

console.log(codethat.languages[2]);

let propertyName = "bornYear";
console.log(codethat[propertyName]);

let myVocab = {
  function: "함수",
  varialble: "변수",
  constant: "상수",
  "default value": "기본 값",
  global: "세계적인",
};

myVocab.local = "지역의"
console.log(myVocab);

myVocab.global = "전체적인"
console.log(myVocab);

delete myVocab["default value"]
console.log(myVocab);

console.log("==================================================");

let myVocab = {
  function: "함수",
  variable: "변수",
  constant: "상수",
  global: "전체적인",
  local: "지역의",
  
  printVocab: function (word) {
    if (word in myVocab) { 
      console.log(`${word}의 뜻은 ${myVocab[word]}입니다.`)
    } else {
      console.log(`단어를 찾지 못했습니다.`)
    }
  }
};

myVocab.printVocab("function");
myVocab.printVocab("local");
myVocab.printVocab("array");

console.log("==================================================");

let hyesoonScore = {
  "데이터 모델링의 이해": 10,
  "데이터 모델과 성능": 8,
  "SQL 기본": 22,
  "SQL 활용": 18,
  "SQL 최적화 기본 원리": 20,
};

let minsoonScore = {
  "데이터 모델링의 이해": 14,
  "데이터 모델과 성능": 8,
  "SQL 기본": 12,
  "SQL 활용": 4,
  "SQL 최적화 기본 원리": 16,
};

function passChecker(scoreObject) {
  let totalScore = 0;
  for (let score in scoreObject) { 
    totalScore += scoreObject[score]
  };
  if (totalScore >= 60) {
    console.log("축하합니다! 합격입니다!")
  } else { 
    console.log("아쉽지만 불합격입니다..")
  };

};

passChecker(hyesoonScore);
passChecker(minsoonScore);

let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

let voteCounter = {};

for (let vote of votes) { 
  if (vote in voteCounter) {
    voteCounter[vote] += 1
  } else { 
    voteCounter[vote] = 1
  }
}

console.log(voteCounter);