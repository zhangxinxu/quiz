var eleIframe = window.parent && window.parent.document.querySelectorAll('iframe')[INDEX];
if (eleIframe) {
    eleIframe.style.height = (document.body.scrollHeight + 16) + 'px';
}

// 文本域处理
[].slice.call(document.querySelectorAll('textarea')).forEach(function (eleTextarea) {
    eleTextarea.addEventListener('input', function () {
        var id = this.id;

        var selector = '.' + id.replace(/[A-Z]/g, function (matches) {
            return '-' + matches.toLowerCase();
        });

        var eleStyle = document.querySelector('#style' + id.replace(/^q/, 'Q'));

        if (eleStyle) {
            eleStyle.innerHTML = selector + '{' + this.value.trim() + '}';
        }

        // 错误检测
        this.className = '';
        var avoid = this.getAttribute('data-avoid');
        if (avoid) {
            avoid.split(',').forEach(function (cssKey) {
                if (eleTextarea.value.replace(/\s*:\s*/g, ':').indexOf(cssKey + ':') != -1) {
                    eleTextarea.className = 'error';
                }
            })
        }

        if (eleIframe) {
            eleIframe.style.height = (document.body.scrollHeight + 16) + 'px';
        }
    });
});