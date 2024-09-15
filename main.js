const lorem=[
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Temporibus consectetur blanditiis cum magni exercitationem facere officiis quidem at odio quibusdam natus voluptas.",
    "nisi impedit dolorem adipisci delectus cumque eligendi maxime itaque voluptatibus.", 
    "perferendis laboriosam minus, repudiandae obcaecati.", 
    "Ipsum quia harum quibusdam distinctio cumque iure ullam nostrum! Corporis cum repudiandae dolore?"
]

const paragraphs=()=>{
    const numsen=Math.floor(Math.random()*5);
    const sentence=[];
    for(let i=0;i<numsen;i++){
        const para=Math.floor(Math.random()*lorem.length);
        sentence.push(lorem[para]);
    }
    return sentence.join(' ');
}

function generate(){
    const paragraph=parseInt(document.getElementById("paragraph").value,10);
    let output=''
    for(let i=0;i<paragraph;i++){
        output+=paragraphs() + '\n\n';
    }
    document.getElementById("output").textContent=output;
}