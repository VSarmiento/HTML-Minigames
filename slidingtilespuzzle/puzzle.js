
var rows = 3
var columns = 3

var currTile;
var whiteTile;

var turns = 0;
let count = 1;

//var imgPlace = ["spider1", "spider2", "spider3", "spider4", "spider5", "spider6", "spider7", "spider8", "spider9"]
var imgPlace = ["spider4", "spider2", "spider8", "spider5", "spider1", "spider6", "spider7", "spider9", "spider3"]

const states = (id) => {
    if (id == 1) return [2, 5];
    if (id == 2) return [1, 3, 6];
    if (id == 3) return [2, 4, 7];
    if (id == 4) return [3, 8];
    if (id == 5) return [1, 6, 9];
    if (id == 6) return [2, 5, 7, 10];
    if (id == 7) return [3, 6, 8, 11];
    if (id == 8) return [4, 7, 12];
    if (id == 9) return [5, 10, 13];
  };
  
window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            var currentImg = imgPlace.shift()
            let tile = document.createElement("img");
            tile.classList = "board_img";
            
            if(currentImg == "spider9") {                                       //hardcoding the 9th image for spiderman board to be white (change in the future)
                tile.id = r.toString() + "," + c.toString();
                whiteTile = r.toString() + "," + c.toString();
                tile.src = "./image/Spiderman/" + "whitebox" + ".jpg";
            } else {
                tile.id = r.toString() + "," + c.toString();                    //Give each tile a specific ID based on its start location in the board
                tile.src = "./image/Spiderman/" + currentImg + ".jpg";
            }

            //Move tile by clicking
            tile.addEventListener("click", moveTile(whiteTile));

            document.getElementById("board").append(tile); 

            console.log(count)
            count = count + 1;
        }
    }
}

//Has to check if current tile is white or current tile cannot move
function moveTile(whiteTile) {
    currTile = this;

    console.log(whiteTile)
}
