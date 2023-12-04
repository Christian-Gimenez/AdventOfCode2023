const demoInput = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;

// console.dir(gamesToArray(demoInput));

const games2DArr = gamesToArray(demoInput);
const gamesArrObj = games2DArr.map(gameArr => gameArrToObj(gameArr));
console.dir(gamesArrObj)

function gameArrToObj(gameArr) {
  const gameID = gameArr.shift().split(" ");
  const gameObj = {
    [gameID[0]] : gameID[1],
    bag : []
  }
  let itemCount = 1;
  gameArr.reduce((arrCubes, elem, i) => {
    let arrElem = elem.split(" ");
    const obj = {};
    obj[arrElem[1]] = arrElem[0]
    arrCubes.push(obj);
    itemCount++;
    if(itemCount == 3) {
      gameObj.bag.push(arrCubes);
      itemCount = 1;
    }
    return arrCubes;
  }, []);
  return gameObj;
}

function gamesToArray(input) {
  const dataArray = input.split("\n");
  return dataArray.filter(line => line.length)
                  .map(line => sameSeparator(line.trim()).split(",")
                      .map(ele => ele.trim()))
                  .filter(line => line.length > 0);

  function sameSeparator(stringLine) {
    let fullSplitString = stringLine.split("");
    fullSplitString = fullSplitString.map(char => {
      if(char == ":" || char == ";") {
        char = ",";
      }
      return char;
    });
    return fullSplitString.join("");
  }
}