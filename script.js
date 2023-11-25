document.querySelector('#tool').addEventListener('change', function() {
    var tool = this.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/tool?' + new URLSearchParams({tool: tool}));
    xhr.onload = function() {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            document.querySelector('#result').innerHTML = JSON.stringify(result, null, 2);
        } else {
            document.querySelector('#result').innerHTML = '请求失败';
        }
    };
    xhr.send();
});
