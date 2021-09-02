import createHeading from './heading.js'
import './main.css'
import img from './icon.png'

const heading = createHeading()

document.body.append(heading)

const image = new Image()
image.src = img;
document.body.append(image)
