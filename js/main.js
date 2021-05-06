window.onload = async function() {

    async function initGame(){
        game = []
        figures = ["AS","Valet","Reine","Roi"]
        colors = ["Pique","Trèfle","Coeur","Carreau"]
    
        colors.forEach(color => {      
            figures.forEach(el => {
                card = {}
                card.name = el
                card.color = color
                game.push(card);
            });
    
            for (let i = 2; i < 11; i++) {
                card = {}
                card.name = i.toString()
                card.color = color
                game.push(card);
            }   
        });
        return game
    }

    async function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      return arr
    }
    

    async function generate(board){
        board = await shuffleArray(board)
        console.log(board)
        let carpet = document.getElementById("carpet")
        
        board.forEach(card => {
            img = document.createElement('img')

            addClickBehavior(img,card)
            addDblClickBehavior(img)

            img.src = img.src = `https://via.placeholder.com/150x150/000000/FFFFFF/?text=MisteryCard`
            carpet.appendChild(img)
        })
    }

    async function addDblClickBehavior(img) {
        img.addEventListener('dblclick', (event) => {
            event.target.src = img.src = `https://via.placeholder.com/150x150/000000/FFFFFF/?text=MisteryCard`
            event.target.class = 0
        })
    }

    async function addClickBehavior(img,card) {
        img.addEventListener('click', (event) => {
                if (event.target.class != "clicked"){
                    rand = Math.floor(Math.random() * 255);
                    rand2 = Math.floor(Math.random() * 255);
                    rand3 = Math.floor(Math.random() * 255);
                    event.target.class = "clicked"
                    event.target.memory = `${rand.toString(16)}${rand2.toString(16)}${rand3.toString(16)}`
                    event.target.src = `https://via.placeholder.com/150x150/${rand.toString(16)}${rand2.toString(16)}${rand3.toString(16)}/FFFFFF/?text=${card.name +' '+ card.color}`
                } else {
                    event.target.src = `https://via.placeholder.com/150x150/${event.target.memory}/FFFFFF/?text=${Math.random().toString(16).substr(2, 65)}`
                }
            })
        }

    async function main(){
        await initGame().then(game => {
            generate(game)
        })
    }

    main()
}