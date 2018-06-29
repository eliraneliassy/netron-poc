class playService {

    getUrl() {
        const url = window.location.href;
        const modelId = location.search.split('id=')[1];
        console.log(modelId);

    }

    getModelById() {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.open('GET', 'https://api.allegro.ai/getModelById/' + this.getUrl());
        xhr.send();


    }

    mockPath() {
        const path = 'https://s3-us-west-2.amazonaws.com/netron-poc/resnet.h5';

        let file;

        console.log('starting download...');
        fetch('https://s3-us-west-2.amazonaws.com/netron-poc/resnet.h5')
            .then(res => {
                return res.blob();
            })
            .then(blob => {
                console.log(blob);
                const pathArr = path.split('/');
                file = new File([blob], pathArr[pathArr.length - 1])
                console.log('download complete');

                console.log('selecting the file for the user...');
                
                window.host._openFile(file);
            });



    }
}

var app = new playService();

app.mockPath();