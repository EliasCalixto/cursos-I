window.onload = () =>{
    var curso0,curso1,curso2,curso3,curso4,curso5,curso6,curso7,curso8,curso9
    var img0,img1,img2,img3,img4,img5,img6,img7,img8,img9

    img0 = document.createElement("img")
    img0.src = "/foto0.jpg"
    img0.classList.add('imgsCourses')

    img1 = document.createElement("img")
    img1.src = "/foto1.jpg"
    img1.classList.add('imgsCourses')

    img2 = document.createElement("img")
    img2.src = "/foto2.jpg"
    img2.classList.add('imgsCourses')

    img3 = document.createElement("img")
    img3.src = "/foto3.jpg"
    img3.classList.add('imgsCourses')

    img4 = document.createElement("img")
    img4.src = "/foto4.png"
    img4.classList.add('imgsCourses')

    img5 = document.createElement("img")
    img5.src = "/foto5.jpg"
    img5.classList.add('imgsCourses')

    img6 = document.createElement("img")
    img6.src = "/foto6.png"
    img6.classList.add('imgsCourses')

    img7 = document.createElement("img")
    img7.src = "/foto7.png"
    img7.classList.add('imgsCourses')

    img8 = document.createElement("img")
    img8.src = "/foto8.png"
    img8.classList.add('imgsCourses')

    img9 = document.createElement("img")
    img9.src = "/foto9.png"
    img9.classList.add('imgsCourses')

    var listCursos = [curso0,curso1,curso2,curso3,curso4,curso5,curso6,curso7,curso8,curso9]
    var listImgs = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9]

    curso0 = {imagen: img0,nombre: 'Aprende a Editar Videos con VSDC',descripcion:'Abre tu canal de videos! Con esto seras capaz de hacerlo.',tutor:'Luisito Comunica',numHoras: 10,numClases: 5, numAlumnos: 30, precio: 250, dir: 'Ciudad de Mexico. 126'}
    curso1 = {imagen: img1,nombre: 'Curso de Programacion con Python',descripcion:'Aprende Python con clases didacticas',tutor:'Elias Calixto',numHoras: 10,numClases: 3, numAlumnos: 30, precio: 600, dir: 'Ate, Vitarte'}
    curso2 = {imagen: img2,nombre: 'Filosofia con Efrain, Materialismo',descripcion:'Apendre de Filosofia, la corriente materialista te espera.',tutor:'Efrain Esteban',numHoras: 10,numClases: 8, numAlumnos: 30, precio: 650, dir: 'JVP. Este 124'}
    curso3 = {imagen: img3,nombre: 'Control de Impulsos, ansiedad, etc.',descripcion:'Aprende a controlas tus actitudes impulsivas al igual que las decisiones',tutor:'Miguel Carbajal',numHoras: 10,numClases: 5, numAlumnos: 30, precio: 800, dir: 'Brena 265'}
    curso4 = {imagen: img4,nombre: 'Historia de los medios',descripcion:'Aprende la historia de los medio',tutor:'Roger Santos',numHoras: 10,numClases: 5, numAlumnos: 30, precio: 1200, dir: 'San Gregorio 15'}
    curso5 = {imagen: img5,nombre: 'Clases de guitarra con Slash',descripcion:'Aprende lo mejor con le mejor',tutor:'Alex Gregorio',numHoras: 10,numClases: 5, numAlumnos: 30, precio: 620, dir: 'Lima,Peru,Vitarte'}
    curso6 = {imagen: img6,nombre: 'Narrativa Audiovisual y storytelling',descripcion:'Expresate mejor con estos cursos',tutor:'Esli Sanchez',numHoras: 10,numClases: 9, numAlumnos: 30, precio: 650, dir: 'San Isidro Distrito de Lima'}
    curso7 = {imagen: img7,nombre: 'Diplomados Online - 2022',descripcion:'Consigue mejores puestos de trabajo',tutor:'San Sneyder',numHoras: 10,numClases: 7, numAlumnos: 30, precio: 900, dir: 'Huachipa 144'}
    curso8 = {imagen: img8,nombre: 'Programacion Web I',descripcion:'Aprende a hacer tus propias paginas web',tutor:'Cristiano Ronaldo',numHoras: 10,numClases: 10, numAlumnos: 30, precio: 800, dir: 'Angamos 155'}
    curso9 = {imagen: img9,nombre: 'Administracion de Empresas',descripcion:'Aprende a administrar tu negocio!',tutor:'Lionel Messi',numHoras: 10,numClases: 14, numAlumnos: 30, precio: 700, dir: 'La Fontana 33'}

    console.log(curso0)
    console.log(curso1)
    console.log(curso2)
    console.log(curso3)
    console.log(curso4)
    console.log(curso5)
    console.log(curso6)
    console.log(curso7)
    console.log(curso8)
    console.log(curso9)

    var classDivs = ('divs')

    var root = document.getElementById('root')
    var div0 = document.createElement('div')
    div0.classList.add(classDivs)
    var div1 = document.createElement('div')
    div1.classList.add(classDivs)
    var div2 = document.createElement('div')
    div2.classList.add(classDivs)
    var div3 = document.createElement('div')
    div3.classList.add(classDivs)
    var div4 = document.createElement('div')
    div4.classList.add(classDivs)
    var div5 = document.createElement('div')
    div5.classList.add(classDivs)
    var div6 = document.createElement('div')
    div6.classList.add(classDivs)
    var div7 = document.createElement('div')
    div7.classList.add(classDivs)
    var div8 = document.createElement('div')
    div8.classList.add(classDivs)
    var div9 = document.createElement('div')
    div9.classList.add(classDivs)

    root.appendChild(div0)
    root.appendChild(div1)
    root.appendChild(div2)
    root.appendChild(div3)
    root.appendChild(div4)
    root.appendChild(div5)
    root.appendChild(div6)
    root.appendChild(div7)
    root.appendChild(div8)
    root.appendChild(div9)

    div0.appendChild(curso0.imagen)
    div1.appendChild(curso1.imagen)
    div2.appendChild(curso2.imagen)
    div3.appendChild(curso3.imagen)
    div4.appendChild(curso4.imagen)
    div5.appendChild(curso5.imagen)
    div6.appendChild(curso6.imagen)
    div7.appendChild(curso7.imagen)
    div8.appendChild(curso8.imagen)
    div9.appendChild(curso9.imagen)

    var tit0 = document.createElement('h1')
    tit0.textContent = curso0.nombre
    tit0.classList.add('h3')
    var tit1 = document.createElement('h1')
    tit1.textContent = curso1.nombre
    tit1.classList.add('h3')
    var tit2 = document.createElement('h1')
    tit2.textContent = curso2.nombre
    tit2.classList.add('h3')
    var tit3 = document.createElement('h1')
    tit3.textContent = curso3.nombre
    tit3.classList.add('h3')
    var tit4 = document.createElement('h1')
    tit4.textContent = curso4.nombre
    tit4.classList.add('h3')
    var tit5 = document.createElement('h1')
    tit5.textContent = curso5.nombre
    tit5.classList.add('h3')
    var tit6 = document.createElement('h1')
    tit6.textContent = curso6.nombre
    tit6.classList.add('h3')
    var tit7 = document.createElement('h1')
    tit7.textContent = curso7.nombre
    tit7.classList.add('h3')
    var tit8 = document.createElement('h1')
    tit8.textContent = curso8.nombre
    tit8.classList.add('h3')
    var tit9 = document.createElement('h1')
    tit9.textContent = curso9.nombre
    tit9.classList.add('h3')

    div0.appendChild(tit0)
    div1.appendChild(tit1)
    div2.appendChild(tit2)
    div3.appendChild(tit3)
    div4.appendChild(tit4)
    div5.appendChild(tit5)
    div6.appendChild(tit6)
    div7.appendChild(tit7)
    div8.appendChild(tit8)
    div9.appendChild(tit9)

    classP = `ppp`

    var desc0 = document.createElement('p')
    desc0.textContent = curso0.descripcion
    desc0.classList.add(classP)
    var desc1 = document.createElement('p')
    desc1.textContent = curso1.descripcion
    desc1.classList.add(classP)
    var desc2 = document.createElement('p')
    desc2.textContent = curso2.descripcion
    desc2.classList.add(classP)
    var desc3 = document.createElement('p')
    desc3.textContent = curso3.descripcion
    desc3.classList.add(classP)
    var desc4 = document.createElement('p')
    desc4.textContent = curso4.descripcion
    desc4.classList.add(classP)
    var desc5 = document.createElement('p')
    desc5.textContent = curso5.descripcion
    desc5.classList.add(classP)
    var desc6 = document.createElement('p')
    desc6.textContent = curso6.descripcion
    desc6.classList.add(classP)
    var desc7 = document.createElement('p')
    desc7.textContent = curso7.descripcion
    desc7.classList.add(classP)
    var desc8 = document.createElement('p')
    desc8.textContent = curso8.descripcion
    desc8.classList.add(classP)
    var desc9 = document.createElement('p')
    desc9.textContent = curso9.descripcion
    desc9.classList.add(classP)

    div0.appendChild(desc0)
    div1.appendChild(desc1)
    div2.appendChild(desc2)
    div3.appendChild(desc3)
    div4.appendChild(desc4)
    div5.appendChild(desc5)
    div6.appendChild(desc6)
    div7.appendChild(desc7)
    div8.appendChild(desc8)
    div9.appendChild(desc9)

    var secFila0 = document.createElement('p')
    secFila0.textContent = `${curso0.tutor}, ${curso0.dir}`
    secFila0.classList.add(classP)
    var secFila1 = document.createElement('p')
    secFila1.textContent = `${curso1.tutor}, ${curso1.dir}`
    secFila1.classList.add(classP)
    var secFila2 = document.createElement('p')
    secFila2.textContent = `${curso2.tutor}, ${curso2.dir}`
    secFila2.classList.add(classP)
    var secFila3 = document.createElement('p')
    secFila3.textContent = `${curso3.tutor}, ${curso3.dir}`
    secFila3.classList.add(classP)
    var secFila4 = document.createElement('p')
    secFila4.textContent = `${curso4.tutor}, ${curso4.dir}`
    secFila4.classList.add(classP)
    var secFila5 = document.createElement('p')
    secFila5.textContent = `${curso5.tutor}, ${curso5.dir}`
    secFila5.classList.add(classP)
    var secFila6 = document.createElement('p')
    secFila6.textContent = `${curso6.tutor}, ${curso6.dir}`
    secFila6.classList.add(classP)
    var secFila7 = document.createElement('p')
    secFila7.textContent = `${curso7.tutor}, ${curso7.dir}`
    secFila7.classList.add(classP)
    var secFila8 = document.createElement('p')
    secFila8.textContent = `${curso8.tutor}, ${curso8.dir}`
    secFila8.classList.add(classP)
    var secFila9 = document.createElement('p')
    secFila9.textContent = `${curso9.tutor}, ${curso9.dir}`
    secFila9.classList.add(classP)

    div0.appendChild(secFila0)
    div1.appendChild(secFila1)
    div2.appendChild(secFila2)
    div3.appendChild(secFila3)
    div4.appendChild(secFila4)
    div5.appendChild(secFila5)
    div6.appendChild(secFila6)
    div7.appendChild(secFila7)
    div8.appendChild(secFila8)
    div9.appendChild(secFila9)

    var prec0 = document.createElement('h4')
    prec0.textContent = `S/${curso0.precio}`
    var prec1 = document.createElement('h4')
    prec1.textContent = `S/${curso1.precio}`
    var prec2 = document.createElement('h4')
    prec2.textContent = `S/${curso2.precio}`
    var prec3 = document.createElement('h4')
    prec3.textContent = `S/${curso3.precio}`
    var prec4 = document.createElement('h4')
    prec4.textContent = `S/${curso4.precio}`
    var prec5 = document.createElement('h4')
    prec5.textContent = `S/${curso5.precio}`
    var prec6 = document.createElement('h4')
    prec6.textContent = `S/${curso6.precio}`
    var prec7 = document.createElement('h4')
    prec7.textContent = `S/${curso7.precio}`
    var prec8 = document.createElement('h4')
    prec8.textContent = `S/${curso8.precio}`
    var prec9 = document.createElement('h4')
    prec9.textContent = `S/${curso9.precio}`

    div0.appendChild(prec0)
    div1.appendChild(prec1)
    div2.appendChild(prec2)
    div3.appendChild(prec3)
    div4.appendChild(prec4)
    div5.appendChild(prec5)
    div6.appendChild(prec6)
    div7.appendChild(prec7)
    div8.appendChild(prec8)
    div9.appendChild(prec9)

    var cursosOnCesta = []

    var btn0 = document.createElement('button')
    btn0.classList.add('border','rounded','bg-success','btnstyle')
    btn0.textContent = `Añadir a la cesta`
    btn0.onclick = () => {
        cursosOnCesta.push(curso0)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn1 = document.createElement('button')
    btn1.classList.add('border','rounded','bg-success','btnstyle')
    btn1.textContent = `Añadir a la cesta`
    btn1.onclick = () => {
        cursosOnCesta.push(curso1)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn2 = document.createElement('button')
    btn2.classList.add('border','rounded','bg-success','btnstyle')
    btn2.textContent = `Añadir a la cesta`
    btn2.onclick = () => {
        cursosOnCesta.push(curso2)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn3 = document.createElement('button')
    btn3.classList.add('border','rounded','bg-success','btnstyle')
    btn3.textContent = `Añadir a la cesta`
    btn3.onclick = () => {
        cursosOnCesta.push(curso3)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn4 = document.createElement('button')
    btn4.classList.add('border','rounded','bg-success','btnstyle')
    btn4.textContent = `Añadir a la cesta`
    btn4.onclick = () => {
        cursosOnCesta.push(curso4)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn5 = document.createElement('button')
    btn5.classList.add('border','rounded','bg-success','btnstyle')
    btn5.textContent = `Añadir a la cesta`
    btn5.onclick = () => {
        cursosOnCesta.push(curso5)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn6 = document.createElement('button')
    btn6.classList.add('border','rounded','bg-success','btnstyle')
    btn6.textContent = `Añadir a la cesta`
    btn6.onclick = () => {
        cursosOnCesta.push(curso6)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn7 = document.createElement('button')
    btn7.classList.add('border','rounded','bg-success','btnstyle')
    btn7.textContent = `Añadir a la cesta`
    btn7.onclick = () => {
        cursosOnCesta.push(curso7)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn8 = document.createElement('button')
    btn8.classList.add('border','rounded','bg-success','btnstyle')
    btn8.textContent = `Añadir a la cesta`
    btn8.onclick = () => {
        cursosOnCesta.push(curso8)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }
    var btn9 = document.createElement('button')
    btn9.classList.add('border','rounded','bg-success','btnstyle')
    btn9.textContent = `Añadir a la cesta`
    btn9.onclick = () => {
        cursosOnCesta.push(curso9)
        console.log(cursosOnCesta)
        alert(`Hay ${cursosOnCesta.length} cursos en la cesta.`)
    }

    div0.appendChild(btn0)
    div1.appendChild(btn1)
    div2.appendChild(btn2)
    div3.appendChild(btn3)
    div4.appendChild(btn4)
    div5.appendChild(btn5)
    div6.appendChild(btn6)
    div7.appendChild(btn7)
    div8.appendChild(btn8)
    div9.appendChild(btn9)

    var status = 0
    cesta = () =>{
        if(status == 0){
            var rootCesta = document.getElementById('rootCesta')
            var divCesta = document.createElement('div')
            var hCesta = document.createElement('h3')
            hCesta.textContent = 'Cursos en Cesta'
            divCesta.classList.add('divCesta','border','rounded')
            rootCesta.appendChild(divCesta)
            divCesta.appendChild(hCesta)
            status=1

            cursosOnCesta.forEach(element =>{
                var divContentCesta = document.createElement('div')
                divContentCesta.textContent = `*${element.nombre}     ---     S/${element.precio}`
                divCesta.appendChild(divContentCesta)
            })
            

            
        }else{
            rootCesta.removeChild(divCesta)
            status=0
        }
    }
}