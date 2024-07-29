import "./style.css"
import Typewriter from "./typewriter"

const typewriter = new Typewriter(
    document.querySelector(".whitespace") as HTMLDivElement, 
    {
        loop: true
    }
)

typewriter
.typeString("Guess what's powers this animation?")
.pauseFor(1000)
.typeString("\n\nAnother guess?")
.pauseFor(500)
.deleteChars(16)
.typeString("\n\nIt's typescript!")
.pauseFor(500)
.typeString("\n\nIsn't that cool?")
.pauseFor(500)
.deleteAll(10)
.pauseFor(300)
.restart()



