const url = [
    {
        imgURL : 'https://adarshm.com/wp-content/uploads/2020/06/Rectangle-45.png',
        vidURL : 'https://www.youtube.com/watch?v=u4ZUPobw-sI'
    },
    {
        imgURL : 'https://adarshm.com/wp-content/uploads/2020/06/Rectangle-45.png',
        vidURL : 'https://www.youtube.com/watch?v=G1eW3Oi6uoc'
    },
    {
        imgURL : 'https://adarshm.com/wp-content/uploads/2020/06/Rectangle-45.png',
        vidURL : 'https://www.youtube.com/watch?v=u4ZUPobw-sI'
    }

]

var arrayImagesElement = document.getElementById("arrayImages");

const createNode = (url) => {
    let img = document.createElement('img');
    let a = document.createElement('a')
    img.src = url.imgURL;
    img.width = "300";
    img.style.margin = "15px";
    a.appendChild(img)
    a.href = url.vidURL
    return a
}

url.map(url => arrayImagesElement.appendChild(    
    createNode(url)
   ));